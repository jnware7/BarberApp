var express = require('express')
var appointments = require('../database/appointmentsdb')

const appointmentsRoutes = new express.Router()


//to show all appointments
appointmentsRoutes.get('/', function (req, res) {
  appointments.viewAppointments()
    .then( result => {
      console.log('result', result)
      res.status(200).json(result)
    })
    .catch(error =>{
      res.json({
        messsage: error.message,
        error: error
      })
    })
})
// to show a form for creating a new appointments
// GET / appointments/ new

// appointmentsRoutes.get('/new', function(req, res){
//   res.render('file name of the view')
// })






//to create an appointment when a appointments is submitted
//POST/appointments
appointmentsRoutes.get('/new', function (req,res){
  res.render('new_appointment')
})
appointmentsRoutes.post('/', function (req,res){
  const {stylist_name,customer_name,style_name,slottime} = req.body
  // res.json([stylist_name,customer_name,style_name,slottime])
  // return
  appointments.createAppointments(stylist_name,customer_name,style_name,slottime)
  .then( result =>{
    console.log('result',result)
    res.json(result)
    // res.redirect('/appointments')
  })
  .catch(error =>{
    res.json({
      messsage: error.message,
      error: error
    })
  })
})






//to delete an appointments when a form is submitted
//DELETE/appointments/:id
//May invovle some redirect back to schedule

appointmentsRoutes.delete('/:id',function (req,res){
  const {id} = req.params
  appointments.softDeleteAppointments(id)
  .then(appointments =>{
    res.status(200).json({ status: 'success', message: 'deleted appointment'})
  })
  .catch(error =>{
    res.json({
      messsage: error.message,
      error: error
    })
  })
})
/to show a form for editing an appointments
//GET/ appointments/:id


appointmentsRoutes.put('/edit/:id', function(req, res) {
  console.log(req.params)
  const {id} = req.params
  const {stylist_name, customer_name, style_name, time} = req.body

  appointments.editAppointments(stylist_name, customer_name, style_name, time ,id)
  .then( appointment => {

    res.status(200).json({
      status: "success",
      data: appointment,
      message: 'Updated appointment'
    })
  })
  .catch(error =>{
    res.json({
      messsage: error.message,
      error: error
    })
  })
})



module.exports = appointmentsRoutes
