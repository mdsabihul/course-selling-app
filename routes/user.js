const { Router } = require("express");

const userRouter = Router();

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

app.use(auth);

userRouter.get('/purchases', (req, res) => {
    res.json({
        message: "Signup EndPoint"
    })
});

module.exports = {
    userRouter
}