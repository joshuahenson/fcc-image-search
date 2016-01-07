'use strict';

var mongoose = require('mongoose');

var SearchSchema = new mongoose.Schema({
    query: String,
    timestamp: {
        type : Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Search', SearchSchema);
