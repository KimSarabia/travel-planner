'use strict';

var express = require("express");

var router = express.Router();

var db = require("../config/db");

router.get('/',function(req,res,next){
  db.query('SELECT * FROM activities', function(err,row,fields){
    if(err){
      res.status(400).send(err);
      return;
    }
    console.log(req);
    res.send(row);
  });
});

router.get('/activity/:id',function(req,res,next){
  db.query('SELECT * FROM activity WHERE ?', {id:req.params.id}, function(err,row,fields){
    if(err){
      res.status(400).send(err);
      return;
    }
    console.log(req);
    res.send(row);
  });
});

router.post('/',function(req,res,next){
  db.query('INSERT INTO activities SET ?', req.body, function(err,result){
    if(err){
      res.status(400).send(err);
      return;
    }
    console.log("result: ", result);
    res.send(result);
  });
});

router.get('/destinations',function(req,res,next){
  console.log("destinations");
  db.query('SELECT DISTINCT destination FROM activities', function(err,row,fields){
    if(err){
      res.status(400).send(err);
      return;
    }
    console.log("row: ", row);
    res.send(row);
  });
});

router.put('/:id',function(req,res,next){
  var updateString = "UPDATE activities SET destination ='" +
  req.body.destination + "',activity ='" +
  req.body.activity +"', detail='" +
  req.body.detail +"', note='" + req.body.note +"' WHERE id='" + req.params.id +"'";

  console.log(updateString);
  db.query(updateString, function(err,result){
    if(err){
      res.status(400).send(err);
      return;
    }
    console.log("result: ", result);
    res.send(result);
  });
});

router.get('/destination/:destination', function(req,res,next){
  db.query('SELECT * FROM activities WHERE ?', req.params ,function(err, results){
    if(err){
      res.status(400).send(err);
      return;
    }
    res.send(results);
  });
});

router.delete('/:id',function(req,res,next){
  db.query('DELETE FROM activities WHERE ?', {id:req.params.id}, function(err,result){
    if(err){
      res.status(400).send(err);
      return;
    }
    res.send(result);
  });
});


module.exports = router;
