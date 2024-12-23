const { Router } = require("express");

const userRouter = Router();

userRouter.post('/signup', (req, res) => {
    res.json({
        message: "Signup EndPoint"
    })
});

userRouter.post('/signin', (req, res) => {
    res.json({
        message: "SignIn EndPoint"
    })
});

userRouter.get('/purchases', (req, res) => {
    res.json({
        message: "Signup EndPoint"
    })
});

module.exports = {
    userRouter
}