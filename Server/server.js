// import express from 'express';
const { configDotenv } = require('dotenv');
const express = require('express');
const path = require('path')
const cors = require('cors')
const mysql = require('mysql')
const multer = require('multer')

const app = express();
configDotenv()
const Port = process.env.PORT

try {
    app.use(express.json());
    app.use(cors());
} catch (error) {
    console.log(error)
}

const db  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
})

app.listen(Port, () => {
    console.log(`App running on Port ${Port}`)
})