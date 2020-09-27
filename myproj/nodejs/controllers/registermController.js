const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Reg } = require('../models/registerm');

// => localhost:3000/register/
router.get('/',(req,res) => {
    Reg.find((err, docs) => {
        if(!err) {res.send(docs);}
        else{console.log('Error in Retrieving Reg data:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('no Record with given Id');
    
    Reg.findById(req.params.id,(err,doc) => {
        if(!err){res.send(doc);}
        else{console.log('error in retrieving Registrant :' + JSON.stringify(err, undefined, 2));}
    })
});

router.post('/', (req,res) => {
    var r = new Reg({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password,
    });
    r.save((err,doc) => {
        if(!err){res.send(doc);}
        else{ console.log('Error in reg save:' + JSON.stringify(err, undefined, 2));}
    });  
});

router.put('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('no Record with given Id');

    var r = {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password,
    };
    Reg.findByIdAndUpdate(req.params.id,{$set: r}, {new: true},(err, doc) => {
        if(!err){res.send(doc);}
        else{ console.log('Error in reg update:' + JSON.stringify(err, undefined, 2));}
    });
});

router.delete('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('no Record with given Id');

    Reg.findByIdAndRemove(req.params.id, (err,doc) => {
        if(!err){res.send(doc);}
        else{ console.log('Error in reg update:' + JSON.stringify(err, undefined, 2));}
    });
});

module.exports=router;
