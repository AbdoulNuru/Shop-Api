import conn from '../../config/config';
import tab from './db';


const deleteTables = async () => {
  const deleteTables = tab.deleteTable;
  const tables = `${deleteTables}`;

  await conn.query(tables);
};

deleteTables();

export default deleteTables;
