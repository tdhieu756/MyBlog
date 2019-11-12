const mongoose = require('mongoose');
const schema = mongoose.Schema;

const users = new schema({
    username:{type:String},
    email:{type:String},
    passowrd:{type:String},
    permission:{type:Number},
    birthday:{type:Date},
    sex:{type:Boolean},
});
module.exports = user = mongoose.model("users",users);