import pool from "./db";

const getAllUsers = async () => {
    try{
        const query = `SELECT * FROM users`
        const results = await pool.query(query);
        console.log("✅ Users Fetched Successfully",results.rows);
    }catch(error){
        console.log("❌ Error Occured in Query Execution",error);
    }
}
const getOnlyUsers = async () => {
    try{
        const query = `
            SELECT u.name FROM users as u
            ORDER BY u.name ASC;
            `
        const results = await pool.query(query);
        console.log("✅ Users Fetched Successfully",results.rows);
    }catch(error){
        console.log("❌ Error Occured in Query Execution",error);
    }
}

getOnlyUsers()