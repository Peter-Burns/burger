var connection = require('./connection.js');

var orm = {
    selectAll: function (cb) {
        connection.query('SELECT * FROM burgers', function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (newBurgerName, cb) {
        connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?,FALSE)', [newBurgerName], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (burgerId, cb) {
        connection.query('UPDATE burgers SET devoured = TRUE WHERE id = ?', burgerId, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;