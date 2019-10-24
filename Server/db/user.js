const createUser = ` insert into users (
        firstname,
        lastname,
        email,
        password,
        gender,
        department,
        address
    ) VALUES($1, $2, $3, $4, $5, $6, $7) ON CONFLICT DO NOTHING returning *`;

const findByEmail = `select userid, password, email from users where email=($1)`;

export default {createUser, findByEmail};