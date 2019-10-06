
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
                message: 'User exist'
            });      
    }

    /*static userLogin(req, res){
        const email = req.body.email;
        const pas = req.body.password;
        const user = users.find(user => user.email === email);

        if(!user){
            return res.status(400).json({
                status: 400,
                message: 'Email do not exist in our database'
            });
        }

        const pass = help1.comparePassword(pas, user.password);

        if(pass){
            res.status(200).json({
                status: 200,
                message: 'Successfully logged in',
                token: help1.getToken(user.email, user.userId)
            });
        }else{
            res.status(400).json({
                status: 400,
                message: 'wrong password'
            });
        }
    }*/
}

export default userController;