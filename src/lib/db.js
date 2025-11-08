const mongoose = require('mongoose');

async function connectToDatabase() {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/eduverse';
  mongoose.set('strictQuery', true);
  await mongoose.connect(uri, {
    autoIndex: true,
  });
  return mongoose.connection;
}

module.exports = { connectToDatabase };


