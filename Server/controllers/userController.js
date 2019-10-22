
import help1 from '../helper/help1';
import validation from '../middleware/joi';
import db from '../../config/config';
import uuid from 'uuid/v1';
import users from '../db/user';
class userController{
    static async userSignUp(req, res){
        const { firstname, lastname, email, 
                gender, department, address
        } = req.body;
        const password = help1.hashPassword(req.body.password);

        const add = await db.query(users.createUser, [uuid(), firstname, lastname,email, password, gender, department, address]);     
        if(add.rowCount === 1){
                return res.status(201).json({ 
                  status: 201,
                  message: "User created successfully",
                  data: firstname, lastname, email, gender,
                  department, address,
                  token: help1.getToken(email)
                });  
               }

            res.status(409).json({
                status: 409,
                error: 'User exist'
            });      
    }

    static async userLogin(req, res){
        const email = req.body.email;
        const password = req.body.password;
        const findByEmail = await db.query(users.findByEmail, [email]);

        if(findByEmail.rowCount > 0){
            const valid = help1.comparePassword(password, findByEmail.rows[0].password);
            if(valid){
                return res.status(200).json({
                    status: 200,
                    message: 'Logged in successfully',
                    token: help1.getToken(email, findByEmail.rows[0].password)
                });
            }else{
                return res.status(401).json({
                  status: 401,
                  error: "incorrect email or password",
                });
            }
        }else{
            res.status(404).json({
                status: 404,
                error: 'It seems like you don\'t have an account'
            });
        }
    }
}

export default userController;