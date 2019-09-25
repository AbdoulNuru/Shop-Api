import users from '../db/userSeeds';
import help1 from '../helper/help1';
import validation from '../middleware/joi';

class userController{
    static userSignUp(req, res){
        const user = {
            userId: users.length + 1,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: help1.hashPassword(req.body.password),
            gender: req.body.gender,
            jobRole: req.body.jobRole,
            department: req.body.department,
            address: req.body.address
        };
        let {error} = validation(req.body);

        if(error){
            return res.status(422).json({
                status: 422,
                error: error.details[0].message.replace(/"/g, '')
            });
        }

        const u = users.find(use => use.email === user.email);    

        if(u){
            res.status(400).json({
                message: 'the email already exist'
            });
        }else{
            users.push(user);
            res.status(201).json({
                status: 201,
                message: 'User created successfully',
                data: user,
                token: help1.getToken(user.userId, user.email)
            });
        }   
    }

    static userLogin(req, res){
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
    }
}

export default userController;