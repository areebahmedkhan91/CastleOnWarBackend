const express = require('express');
const app = express();

const mongoose = require('mongoose');
var url = 'mongodb+srv://osama:osama123456@cluster0.axlug.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, function (err, db) {
    console.log("Mongoose connected!");
});

mongoose.connection.on('connected', () => {
    console.log('connected to mongo database');
});
mongoose.connection.on('error', error => {
    console.log('Error at mongoDB: ' + error);
});

module.exports = app;