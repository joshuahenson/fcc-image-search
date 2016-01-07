'use strict';

var SearchHandler = require('../controllers/searchHandler.js');

module.exports = function (app) {

	var searchHandler = new SearchHandler();

    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/search/:q', searchHandler.search);

    app.get('/latest', searchHandler.latest);

    app.use(function(req, res){
        res.status(404).json({error: "This is not the page you're looking for"});
    });
};
