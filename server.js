require ('./models/db');
const express = require('express');
const app = express();
const employeeController = require('./controllers/employeeController')
app.listen(3000,()=>{
    console.log('Server is running at port 3000')
})
app.use('/employee',employeeController)