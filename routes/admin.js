

const { Router } = require("express");
const adminRouter = Router();
const jwt = require('jsonwebtoken');
const { adminModel } = require("../db");
const bcrypt = require("bcrypt");

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

adminRouter.post('/signup', async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    // console.log(email, password, firstName, lastName)
    const hashPassword = await bcrypt.hash(password, 5);
    try {
        await adminModel.create({
            email: email,
            password: hashPassword,
            firstName: firstName,
            lastName: lastName
        });
        res.json({
            message: "Admin Signedup Successsfully!.."
        })
    } catch {
        res.json({
            message: "Admin Signup Error !.."
        })
    }

});

adminRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await adminModel.findOne({
            email: email
        })
        const hashPasswordCompare = bcrypt.compare(password, admin.password);
        if (hashPasswordCompare) {
            res.json({
                message: "You'r Successfully Logged In",
                token: jwt.sign({
                    id: admin._id.toString()
                }, process.env.JWT_ADMIN_SECRET)
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