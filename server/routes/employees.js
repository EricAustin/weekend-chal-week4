var express = require('express');
var router = express.Router();

var pool = require('../modules/pool');

router.get('/', function (req, res) {
	pool.connect(function (errorConnectingToDatabase, client, done) {
		if (errorConnectingToDatabase) {
			console.log('Error connecting to database', errorConnectingToDatabase);
			res.sendStatus(500);
		} else {
			client.query('SELECT id, first_name, last_name, title, salary, is_active from employees;', function (errorMakingQuery, result) {
				done();
				if (errorMakingQuery) {
					console.log('Error making database query', errorMakingQuery);
					res.sendStatus(500);
				} else {
					res.send(result.rows);
				}
			});
		}
	});
});

router.post('/', function (req, res) {
	console.log('router.get was hit');
	pool.connect(function (errorConnectingToDatabase, client, done) {
		if (errorConnectingToDatabase) {
			console.log('Error connecting to database', errorConnectingToDatabase);
			res.sendStatus(500);
		} else {
			
			client.query('INSERT INTO employees (first_name, last_name, title, salary, is_active) values ($1,$2,$3,$4,$5);', [req.body.first_name, req.body.last_name, req.body.title, req.body.salary, 'true'], function (errorMakingQuery, result) {
				done();
				if (errorMakingQuery) {
					console.log('Error making database query', errorMakingQuery);
					res.sendStatus(500);
				} else {
					console.log('results sent');
					res.send(result.rows);
					}
			});
		} 
	});
});



module.exports = router;


