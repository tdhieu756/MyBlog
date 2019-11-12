const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cors= require('cors');
const mongoose = require('mongoose');

const indexRouter = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const url = "mongodb://127.0.0.1:27017/myblog";
mongoose.connect(url,{useNewUrlParser:true, useCreateIndex:true})
.then((res)=> {
    console.log("Connect success!")
    // console.log(res);
})
.catch((err)=>{
    console.log("Erro connet to Mongodb");
    // console.log(err);
});

app.use('/',indexRouter);

module.exports = app;