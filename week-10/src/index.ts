import pool from "./db";

const testDB = async ()=>{
    try{
        const client = await pool.connect();
        const res = await client.query("SELECT NOW()");
        console.log("Connected to PostgreSQL at:",res.rows[0].now);
        client.release();
    }catch(err){
        console.error("Database Connection Error",err);
    }
}
testDB()