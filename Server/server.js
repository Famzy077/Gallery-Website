// import express from 'express';
const { configDotenv } = require('dotenv');
const express = require('express');
const path = require('path')
const app = express();
app.use(express.static(path.join(__dirname, 'Public')));
configDotenv()
const Port = process.env.PORT

try {
    app.get('/home', (req, res) => {
        res.send(path.join(__dirname, 'home.html', 'Public'))
    })
} catch (error) {
    console.log(error)
}
// const Port = 4000
app.listen(Port, () => {
    console.log(`App running on Port ${Port}`)
})