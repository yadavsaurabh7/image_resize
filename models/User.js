const {mongoose} = require('../config/database');
const Schema =  mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    id:ObjectId,
    autoCreatedAt:false,
    autoUpdatedAt:false,
    attributes:{
        first_name:{
            "type":'string'
        },
        last_name:{
            "type":'string'
        },
        email:{
            "type":'string'
        }
    }
});

const User = mongoose.model("user", UserSchema)

module.exports = User