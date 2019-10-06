import tab from '../db/db';
import conn from '../../config/config';

// export default {
//   createUserTable,
//   createArticleTable
// };

const createTables = async () =>{
    const createUserTable = tab.userTable;
    const createArticleTable = tab.articleTable;
    const tables = `${createUserTable}; ${createArticleTable}`;

    await conn.query(tables);
};

createTables();

export default createTables;
