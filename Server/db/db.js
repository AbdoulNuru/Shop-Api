import db from '../../config/config';
import dotenv from 'dotenv';

dotenv.config();

/*class Database{
    static async createUserTable(){
        const users = await db.query(`
            CREATE TABLE IF NOT EXISTS employee (
                employeeId UUID PRIMARY KEY,
                firstName text,
                lastName text,
                email text UNIQUE,
                password text,
                gender text,
                department text,
                address text
            )`);
           return users;   
    }  

    static async createArticleTable(){
        const article = await db.query(`
            CREATE TABLE IF NOT EXISTS articles (
                articleId UUID PRIMARY KEY,
                title text,
                article text,
                createdOn date,
                createdBy UUID,
                foreign key(createdBy) REFERENCES employee ON DELETE CASCADE
            )`);
        return article;
    }
}*/

const userTable = `
    CREATE TABLE IF NOT EXISTS users (
                userId SERIAL PRIMARY KEY,
                firstName text,
                lastName text,
                email text UNIQUE,
                password text,
                gender text,
                department text,
                address text)`;

const articleTable = `
        CREATE TABLE IF NOT EXISTS articles (
                articleId UUID PRIMARY KEY,
                title text,
                article text,
                createdOn date,
                createdBy SERIAL,
                foreign key(createdBy) REFERENCES users ON DELETE CASCADE)`;

const deleteTable = `DROP TABLE IF EXISTS employee, articles CASCADE;`;                

export default {
    userTable,
    articleTable,
    deleteTable
};