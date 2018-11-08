var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Products = require('../models/Product.js');

/* GET ALL PRODUCTS */
router.get('/', function (req, res, next) {
    Products.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE PRODUCT BY ID */
router.get('/:id', function (req, res, next) {
    Products.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE PRODUCT */
router.post('/', function (req, res, next) {
    Products.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE PRODUCT */
router.put('/:id', function (req, res, next) {
    Products.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE PRODUCT */
router.delete('/:id', function (req, res, next) {
    Products.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
