var express = require('express');
var router = express.Router();

var pool = require('../modules/pool');

router.put('/:id', function(req,res){
    // console.log('req.params.id', req.params.id);
    pool.connect(function(err,db,done){
        if (err){
            console.log('error connecting to db', err);
            res.sendStatus(500);
        } else {
            db.query('UPDATE employees SET is_active=$1 WHERE id=$2;', [req.body.newState, req.params.id], function(err, db){
                done();
                if(err){
                    console.log('error making query:', err);                    
                } else {
                    res.sendStatus(200);
                }
            }); 
        }
    }); 
});

module.exports = router;