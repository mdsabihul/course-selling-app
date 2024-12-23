

const { Router } = require("express");
const adminRouter = Router();

const { adminModal } = require("../db");

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