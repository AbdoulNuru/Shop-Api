import dotenv from 'dotenv';

dotenv.config();

const users = `
    CREATE TABLE IF NOT EXISTS users (
                userId SERIAL PRIMARY KEY,
                firstName text,
                lastName text,
                email text UNIQUE,
                password text,
                gender text,
                department text,
                address text)`;

const products = `
        CREATE TABLE IF NOT EXISTS products (
                productId SERIAL PRIMARY KEY,
                name text,
                price numeric,
                mfgDate date,
                expDate date,
                addedBy SERIAL,
                foreign key(addedBy) REFERENCES users ON DELETE CASCADE)`;

const deleteTable = `DROP TABLE IF EXISTS users, products CASCADE;`;                

export default {
    users,
    products,
    deleteTable
};