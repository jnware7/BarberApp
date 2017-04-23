var express = require('express')
var db = require('./database/init')

var app = express()
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//
var appointmentsRoutes = require('./routes/appointments.js')
app.use('/appointments', appointmentsRoutes)

var customersRoutes = require('./routes/customers.js')
app.use('/customers', customersRoutes)

var stylistRoutes = require('./routes/stylist.js')
app.use('/stylist', stylistRoutes)

var timeslotRoutes = require('./routes/timeslot.js')
app.use('/timeslot', timeslotRoutes)

var stylesRoutes = require('./routes/styles.js')
app.use('/styles', stylesRoutes)
// var usersRoutes = require('./routes/users.js')
// app.use('/users', usersRoutes)
// var loginRoutes = require('./routes/login.js')
// app.use('/login', loginRoutes)



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
