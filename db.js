const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
console.log("Im Db")
mongoose.connect("mongodb+srv://mdsabihulhaque:cyy0izCSwKGpMaYq@cluster0.8bkwt.mongodb.net/coursera-app")
const userSchema = new Schema({

    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
});
const adminSchema = new Schema({

    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
});
const courseSchema = new Schema({

    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
});
const purchaseSchema = new Schema({

    courseId: ObjectId,
    userId: ObjectId
});

const userModal = mongoose.model("user", userSchema);
const adminModal = mongoose.model("admin", adminSchema);
const courseModal = mongoose.model("course", courseSchema);
const purchaseModal = mongoose.model("purchase", purchaseSchema);


module.exports = {
    userModal, adminModal, courseModal, purchaseModal
}