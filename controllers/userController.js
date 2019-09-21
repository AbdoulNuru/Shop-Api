import users from '../db/userSeeds';
import help1 from '../helper/help1';

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

        users.push(user);
        res.status(201).json({
            status: 201,
            message: 'User created successfully',
            data: user,
            token: help1.getToken(user.userId, user.email)
        });
    }
}

export default userController;