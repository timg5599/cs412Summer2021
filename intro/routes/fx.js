const express = require('express');
const router = express.Router();

const request = require('request');
const options = {
    'method': 'GET',
    'url': 'http://apilayer.net/api/live?access_key=707d4d2111a1976c7c4bbd767a9bf3a6&currencies=EUR, GBP&format=1'
}; //JSON object


router.get('/', ((req, res, next) => {
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        res.render('index', { title: 'FX Rates', result: response.body });

    });
}))
module.exports = router;
