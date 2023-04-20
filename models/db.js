const mongoose = require('mongoose');
require ('./employee.model');
mongoose.connect('mongodb://127.0.0.1:27017/EmployeeDB',{useNewUrlParser:true}, (err)=>{
    if (!err){
        console.log('MongooseDB Connection success')}
    else {
        console.log('Error In DB Connection '+ err)}
});