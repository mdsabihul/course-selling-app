const { Router } = require("express");
const bcrypt = require("bcrypt");
const userRouter = Router();
const { userModel } = require('../db');
const jwt = require('jsonwebtoken');
// const auth = (req, res, next) => {
//     const token = req.headers.token;
//     const verifyToken = jwt.verify(token, JWT_SECRET);
//     if (verifyToken) {
//         req.userId = verifyToken.id;
//         next();
//     } else {
//         res.json({
//             message: "Invalid Token"
//         })
//     }
// }

userRouter.post('/signup', async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    // console.log(email, password, firstName, lastName)
    const hashPassword = await bcrypt.hash(password, 5);
    try {
        await userModel.create({
            email: email,
            password: hashPassword,
            firstName: firstName,
            lastName: lastName
        });
        res.json({
            message: "User Signedup Successsfully!.."
        })
    } catch (e) {
        res.json({
            message: "User Signup Error !.."
        })
    }

});

userRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({
            email: email
        })
        const hashPasswordCompare = bcrypt.compare(password, user.password);
        if (hashPasswordCompare) {
            res.json({
                message: "You'r Successfully Logged In",
                token: jwt.sign({
                    id: user._id.toString()
                }, process.env.JWT_USER_SECRET)
            })
        } else {
            res.json({
                message: "You'r Entered Incorrect Credientials"
            })
        }
    } catch (e) {
        res.json({
            message: "Email not registred with us please signup before login..."
        })
    }
});

// app.use(auth);

userRouter.get('/purchases', (req, res) => {
    res.json({
        message: "Signup EndPoint"
    })
});

module.exports = {
    userRouter
}