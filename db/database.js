module.exports =  () => {
    const mongoose = require('mongoose');
    const databaseName = 'whiteboard';
    var   connectionString =
        'mongodb://localhost/';
    connectionString += databaseName;
    mongoose.connect(connectionString, { useNewUrlParser: true });
};
