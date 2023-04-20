require('./models/db');
const express = require('express');
const app = express();
const employeeController = require('./controllers/employeeController');
const path = require('path');
const exphbs = require('express-handlebars');
const parser = require('body-parser');
const bodyParser = require("body-parser");
app.listen(3000, () => {
    console.log('Server is running at port 3000')
});
app.use('/employee', employeeController);
app.set('views', path.join(__dirname, '/views'));
app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views/layouts/'}));
// chu thich lai
app.set('view engine','hbs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json);