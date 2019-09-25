import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

class Helper {

    static getToken(email, id) {

        return jwt.sign({email, id}, process.env.SECRET /*, { expiresIn: 60 }*/);

    }



    static hashPassword(password) {
        const hash = bcrypt.hashSync(password, 10);

        return hash;
    }



    static comparePassword(password, hash) {

        const result = bcrypt.compareSync(password, hash);

        return result;

    }

}

export default Helper;
