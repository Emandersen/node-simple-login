var mongodb = require('mongodb');
var conf = require('../conf.js').config; // Adjust the path as needed

function connectToDatabase() {
    return new Promise((resolve, reject) => {
        mongodb.MongoClient.connect(conf.database_string, (err, client) => {
            if (err) {
                return reject(err);
            }
            // Extract the database name from the connection string
            const dbName = conf.database_string.split('/').pop().split('?')[0];
            resolve(client.db(dbName));
        });
    });
}

// register user, with username, password, work_position
function pushUserToDatabase(db, username, password, work_position) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        collection.insertOne({ username: username, password: password, work_position: work_position }, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
}

    



module.exports = {
    connectToDatabase,
    pushUserToDatabase
};