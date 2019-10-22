import Joi from '@hapi/joi';

const validateUser = (user)=>{
    let Schema = Joi.object({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        gender: Joi.string().required(),
        department: Joi.string().required(),
        address: Joi.string().required()
    })

    return Schema.validate(user);
};

export default validateUser;
