import pool from "./db";

const createTable = async () =>{
    try{
        const query = `
            CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `
        await pool.query(query);
        console.log("Users table Successfully created");
    }catch(err){
        console.log("Error occurred in users table creation",err);
    }

    try {
        const query = `
            CREATE TABLE IF NOT EXISTS todos (
                 id SERIAL PRIMARY KEY,
                 user_id INTEGER REFERENCES users(id),
                 title VARCHAR(100) NOT NULL,
                 description TEXT NOT NULL,
                 is_done BOOLEAN DEFAULT FALSE
            );
        `
        await pool.query(query);
        console.log("todos table created successfully✅");
    }catch(err){
        console.log("Error Occured in todos table creation",err)
    }finally{
        pool.end();
    }
}

createTable();