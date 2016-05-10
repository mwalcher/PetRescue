var express = require('express');
// add path module
var path = require('path');
var router = express.Router();
var mongoose = require('mongoose');
var Dog = require('../models/Dog.js');
var Cat = require('../models/Cat.js');
var Other = require('../models/Other.js');

/* GET home page */
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/views', 'index.html'));
});

/* GET Dog List */
router.get('/api/dogs', function(req, res, next) {
  Dog.find(function(err, pets){
    if(err) return next(err);
    res.json(pets);
  });
});

/* GET Specific Dog */
router.get('/api/dogInfo/:id', function(req, res, next) {
  Dog.findById(req.params.id, function(err, pet){
    if(err) return next(err);
    res.json(pet);
  });
});

/* GET Cat List */
router.get('/api/cats', function(req, res, next) {
  Cat.find(function(err, pets){
    if(err) return next(err);
    res.json(pets);
  });
});

/* GET Specific Cat */
router.get('/api/catInfo/:id', function(req, res, next) {
  Cat.findById(req.params.id, function(err, pet){
    if(err) return next(err);
    res.json(pet);
  });
});

/* GET Others List */
router.get('/api/others', function(req, res, next) {
  Other.find(function(err, pets){
    if(err) return next(err);
    res.json(pets);
  });
});

/* GET Specific Other Animal */
router.get('/api/otherInfo/:id', function(req, res, next) {
  Other.findById(req.params.id, function(err, pet){
    if(err) return next(err);
    res.json(pet);
  });
});

module.exports = router;
