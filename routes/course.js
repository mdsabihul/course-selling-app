const { Router } = require("express");

const courseRouter = Router();
courseRouter.get('/course/purchase', () => {
    res.json({
        message: "Signup EndPoint"
    })
});

courseRouter.get('/preview', () => {
    res.json({
        message: "Signup EndPoint"
    })
});



module.exports = {
    courseRouter
}