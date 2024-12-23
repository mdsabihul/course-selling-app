const { Router } = require("express");

const courseRouter = Router();
courseRouter.get('/course/purchase', (req, res) => {
    res.json({
        message: "Signup EndPoint"
    })
});

courseRouter.get('/preview', (req, res) => {
    res.json({
        message: "Signup EndPoint"
    })
});



module.exports = {
    courseRouter
}