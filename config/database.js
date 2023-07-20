import mongoose from 'mongoose';

class Database {

    async connectToDatabase(){
       try {
        mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}?authSource=admin`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
           return console.log('Success connect to database')
       } catch (error) {
            return console.log(error)  
       }
   }
}

export default Database;