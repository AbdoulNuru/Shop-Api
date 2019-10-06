const createUser = ` insert into employee (
        employeeId,
        firstname,
        lastname,
        email,
        password,
        gender,
        department,
        address
    ) VALUES($1, $2, $3, $4, $5, $6, $7, $8) ON CONFLICT DO NOTHING returning *`;

    

export default {createUser};