const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();

app.post('/user/signup', () => {
    res.json({
        message: "Signup EndPoint"
    })
});

app.post('/user/signin', () => {
    res.json({
        message: "SignIn EndPoint"
    })
});

app.get('/user/purchases', () => {
    res.json({
        message: "Signup EndPoint"
    })
});

app.get('/course/purchase', () => {
    res.json({
        message: "Signup EndPoint"
    })
});

app.get('/courses', () => {
    res.json({
        message: "Signup EndPoint"
    })
});


app.listen(300)
