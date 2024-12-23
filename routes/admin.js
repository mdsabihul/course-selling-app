

const { Router } = require("express");
const adminRouter = Router();
const jwt = require('jsonwebtoken');
const { adminModal } = require("../db");

const auth = (req, res, next) => {
    const token = req.headers.token;
    const verifyToken = jwt.verify(token, JWT_SECRET);
    if (verifyToken) {
        req.userId = verifyToken.id;
        next();
    } else {
        res.json({
            message: "Invalid Token"
        })
    }
}

adminRouter.post('/signup', (req, res) => {
    res.json({
        message: "Signup EndPoint"
    })
});

adminRouter.post('/signin', (req, res) => {
    res.json({
        message: "SignIn EndPoint"
    })
});

app.use(auth);

adminRouter.get('/course', (req, res) => {
    res.json({
        message: "Signup EndPoint"
    })
});


adminRouter.get('/course/bulk', (req, res) => {
    res.json({
        message: "Signup EndPoint"
    })
});

module.exports = {
    adminRouter
}