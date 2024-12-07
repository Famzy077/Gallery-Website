const express = require('express');
const path = require('path');

const app = express();
app.get('/', (req, res) => {
    if(res){
        res.send('<h1>Hello World<h4>')
    }else{
        console.log('An error occur')
    }
})

app.listen(4000, () => {
    console.log('App is running on port 4000')
})