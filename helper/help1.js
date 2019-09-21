import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

class Helper {

    static getToken(userPayload) {

        return jwt.sign(userPayload, process.env.SECRET/*, { expiresIn: '1h' }*/);

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
