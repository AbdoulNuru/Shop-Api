import jwt from 'jsonwebtoken';

const auth = (req, res, next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const verify = jwt.verify(token, process.env.SECRET);
        //const valid = users.find(use => use.email === verify.email);
        if(valid){
            req.user = verify;
            next();
        }else{
            res.status(401).json({
                status: 401,
                message: 'Authentication failed'
            });
        }
    }catch(error){
        return res.status(401).json({
            status: 401,
            message: 'Authentication failed'
        });
    }   
};

export default auth;