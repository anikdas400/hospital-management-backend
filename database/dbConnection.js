import  Mongoose  from "mongoose";

export const dbConnection = () =>{
    Mongoose
    .connect(process.env.MONGO_URI,{
        dbName:"mern_stack_hospital_management_system"
    })
    .then(()=>{
        console.log("connected to database")
    })
    .catch((err)=>{
        console.log(`some error occured this connection:${err}` )
    })

}
