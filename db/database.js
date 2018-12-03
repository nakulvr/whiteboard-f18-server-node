module.exports =  () => {
    const mongoose = require('mongoose');
    // const databaseName = 'whiteboard';
    const databaseName = 'heroku_x8dtzpdk'
    // var   connectionString =
    //     'mongodb://localhost/';
    // connectionString += databaseName;
    const connectionString = 'mongodb://test:test123@ds137100.mlab.com:37100/' + databaseName
    mongoose.connect(connectionString, { useNewUrlParser: true });
};
