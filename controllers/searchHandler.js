'use strict';

var Search = require('../models/search.js');
var request = require('request');

function SearchHandler () {
    this.search = function(req, res) {
        var start = req.query.offset ? req.query.offset * 10 : 1;
        var url = 'https://www.googleapis.com/customsearch/v1?key=' +
            process.env.GOOGLE_KEY + '&cx=' + process.env.GOOGLE_CX +
            '&searchType=image&q=' + req.params.q + '&start=' + start +
            '&fields=items(image%2FcontextLink%2Clink%2Csnippet)'
        Search.create({ query: req.params.q }, function (err) {
            if (err) throw err;
        })
        request.get(url, { json: true }, function(error, response, body) {
            if (error) {
                throw error;
            } else {
                var results = []
                for(var i = 0, len = body.items.length; i < len; i++) {
                    results.push({"image": body.items[i].link,
                        "text": body.items[i].snippet,
                        "page": body.items[i].image.contextLink
                    })
                }
                res.json(results);
            }
        })
    };
    this.latest = function(req, res) {
        var latestSearches = [];
        Search.find({}).sort('-timestamp').limit(10).exec(function(err, docs){
            if (err) {
                throw err;
            } else {
                for(var i = 0, len = docs.length; i < len; i++) {
                    latestSearches.push(docs[i].query);
                }
                res.json(latestSearches);
            }
        })
    };
}

module.exports = SearchHandler;
