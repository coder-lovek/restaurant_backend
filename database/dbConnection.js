import mongoose from 'mongoose';

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"RESTAURANT",
    }
    ).then(()=>{
        console.log("Database is connected");
    }).catch((err)=>{
        console.log(err);
    })
}