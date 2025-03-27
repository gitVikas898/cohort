import pool from "./db";

const updateEmail = async (id:number,newEmail:string) => {
    try {
        const query = `UPDATE users SET email = $2 WHERE id = $1 RETURNING *`
        const values = [id,newEmail];
       const result =  await pool.query(query,values);
        console.log("✔️ Data updated into table users" , result.rows[0]);

    }catch(error){
        console.log("❌ Error Occurred in Updating user",error);
    }
}

updateEmail(1,"vikasUpdate1@gmail.com");