const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:IRLOVtCN5oHa6x0M@cluster0.bqaxtmi.mongodb.net/trajethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
