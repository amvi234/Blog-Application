import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-ic1wtde-shard-00-00.bdytzc7.mongodb.net:27017,ac-ic1wtde-shard-00-01.bdytzc7.mongodb.net:27017,ac-ic1wtde-shard-00-02.bdytzc7.mongodb.net:27017/?ssl=true&replicaSet=atlas-cj28mj-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;