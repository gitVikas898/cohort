import pool from "./db";

const deleteTodo = async (id:number,) => {
    try {
        const query = `DELETE FROM todos WHERE id = $1 RETURNING *`
        const values = [id];
        const results = await pool.query(query,values);
        console.log("✔️ Data Deleted from table todos ",results.rows[0]); 
    }catch(error){
        console.log("❌ Error Occured in execution of query ",error);
    }finally{
        pool.end();
    }
}

deleteTodo(1);