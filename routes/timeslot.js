var express = require('express')
var timeslot = require('../database/timeslotdb')

const timeslotRoutes = new express.Router()
//CREATE
timeslotRoutes.get('/', (req,res)=> {
  timeslot.createTime()
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
});
//DISPLAY FORM TO ADD NEW ROW  DATABASE
timeslotRoutes.get('/new', (req,res)=> {
  console.log('!!!!!!!!!');
  res.render('new_time')
});
//READ ONE
timeslotRoutes.get('/:id', (req,res)=> {
  let {id} = req.params
  timeslot.viewTime(id)
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
});
//DELETE
timeslotRoutes.delete('/:id', (req,res)=> {const {id} = req.params
  timeslot.deleteTime(id)
  .then(stylist =>{
    res.status(200).json({ status: 'success', message: 'deleted stylist'})
  })
  .catch(error =>{
    res.json({
      messsage: error.message,
      error: error
    })
  })
});
//CREATE FORM TO EDIT A ROW ALREADY IN DATABASE
timeslotRoutes.put('/edit/:id', (req,res)=> {
  const {id} = req.params
  const {slottime} = req.body
  timeslot.editTime(slottime,id)
  .then( stylist => {
    console.log(stylist)
    res.status(200).json({
      status: "success",
      data: appointment,
      message: 'Updated Stylist Info'
    })
  })
  .catch(error =>{
    res.json({
      messsage: error.message,
      error: error
    })
  })
});



module.exports = timeslotRoutes
