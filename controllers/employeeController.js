const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Employee = require('/models/employee.model')
router.get('/',(req,res) => {
    res.render('employee/addOrEdit',{
        viewTitle :'Insert Employee'
    })
})
router.post('/',(req,res) => {
    let employee = new Employee();
    employee.fullname = req.body.fullname;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
})

module.exports = router;
