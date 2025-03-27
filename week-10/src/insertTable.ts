import pool from "./db";

const insertUsers = async (name:string , email:string,password:string)=>{
    try {
        const query = `INSERT INTO users (name , email , password) VALUES ($1,$2,$3) RETURNING *`
        const values = [name , email, password];
        await pool.query(query,values);
        console.log("✔️ Data inserted into table users");
    }catch(error){
        console.log("❌ Error occurred in inserting into users");
    }
}


const insertTodos = async (user_id:number,title:string,description:string)=>{
   try {
        const query = `INSERT INTO todos (user_id,title,description)  VALUES($1,$2,$3) RETURNING * `
        const values = [user_id,title,description];
        await pool.query(query,values);
        console.log("✔️ Data inserted into table todos");
   } catch(error){
        console.log("❌ Error occurred in inserting into users");
   }
}


insertTodos(3,"Relax","Watch Anime on CruncyRoll");
insertTodos(4,"Site Visit","Visit Site for Material Inspection");