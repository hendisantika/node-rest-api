var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/Product.js');

/* GET ALL PRODUCTS */
router.get('/', function (req, res, next) {
    Product.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});


