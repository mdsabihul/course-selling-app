const { Router } = require("express");

const userRouter = Router();

userRouter.post('/signup', () => {
    res.json({
        message: "Signup EndPoint"
    })
});

userRouter.post('/signin', () => {
    res.json({
        message: "SignIn EndPoint"
    })
});

userRouter.get('/purchases', () => {
    res.json({
        message: "Signup EndPoint"
    })
});

module.exports = {
    userRouter
}