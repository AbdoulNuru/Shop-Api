import {check, validationResult} from 'express-validator';

class validations{
    
    static checkFirstName(req, res, next){
        const firstname = req.body.firstname;
        if (typeof firstname != "string"){
            res.status(422).json({
                status: 422,
                message: 'firstname is required and must be a string'
            });
        }else{
            next();
        }
    }

    static checkLastName(req, res, next) {
        const lastname = req.body.lastname;
        if (typeof lastname != "string") {
            res.status(422).json({
                status: 422,
                message: 'lastname is required and must be a string'
            });
        } else {
            next();
        }
    }

    static checkEmail(req, res, next){
        const email     = req.body.email;
        const emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!emailRegx.test(email)){
            res.status(422).json({
                status: 422,
                message: 'Email is required and it must be a valid email string'
            });
        }else{
            next();
        }
    }

    static checkGender(req, res, next){
        const gender  = req.body.gender;

        if(typeof gender != "string"){
                res.status(422).json({
                    status: 422,
                    message: 'Gender is required'
                });
        }else{
            next();
        }
    }

    static checkJobRole(req, res, next){
        const jobRole = req.body.jobRole;

        if(typeof jobRole != "string"){
            res.status(422).json({
                status: 422,
                message: 'jobRole is required'
            });
        }else{
            next();
        }
    }

    static checkDepart(req, res, next) {
        const depart = req.body.department;

        if (typeof depart != "string") {
            res.status(422).json({
                status: 422,
                message: 'Department is required'
            });
        } else {
            next();
        }
    }
}

export default validations;