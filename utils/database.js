var mongodb = require('mongodb');
var config = require('../conf.js'); // Adjust the path as needed

function connectToDatabase() {
    return new Promise((resolve, reject) => {
        mongodb.MongoClient.connect(`mongodb+srv://${config.username}:${config.password}@mongodbtest.01dwifl.mongodb.net/${config.database}?retryWrites=true&w=majority&appName=mongoDBTest`, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
            if (err) {
                return reject(err);
            }
            resolve(client.db(config.database));
        });
    });
}


function pingDatabase() {
    return new Promise((resolve, reject) => {
        connectToDatabase().then((db) => {
            db.command({ ping: 1 }, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        }).catch((err) => {
            reject(err);
        });
    });
}


module.exports = {
    connectToDatabase,
    pingDatabase
};