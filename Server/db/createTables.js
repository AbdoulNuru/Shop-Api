import tab from '../db/db';
import conn from '../../config/config';

const createTables = async () =>{
    const createUserTable = tab.users;
    const createProductTable = tab.products;
    const tables = `${createUserTable}; ${createProductTable}`;

    await conn.query(tables);
};

createTables();

export default createTables;
