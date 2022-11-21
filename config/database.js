const mongoose = require('mongoose');

// const connect =  mongoose.createConnection('mongodb+srv://yadavsaurab7:rsDGizUuEHqzOpdX@cluster0.pmhp4mx.mongodb.net/?retryWrites=true&w=majority');
const connect = ()=> mongoose 
 .connect('mongodb+srv://yadavsaurab7:rsDGizUuEHqzOpdX@cluster0.pmhp4mx.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true})   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));
module.exports.connect = connect;
module.exports.mongoose = mongoose;
