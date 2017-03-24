var express = require('express')
var stylist = require('../database/stylistdb')

const stylistRoutes = new express.Router()
//CREATE
stylistRoutes.post('/', (req,res) => {
  console.log('entered stylist /');
  stylist.createStylist()
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
//READ ALL
stylistRoutes.get('/', (req,res) => {
  stylist.viewStylist()
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
stylistRoutes.get('/new', (req,res)=> {
  res.render('new_stylist')
});
//READ DELETED
stylistRoutes.get('/notactive', (req,res)=> {
  stylist.viewSoftDeleteStylist()
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
//READ ONE
stylistRoutes.get('/:id', (req,res) => {
  const {id} = req.params
  stylist.viewOneStylist(id)
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
stylistRoutes.delete('/:id', (req,res)=> {const {id} = req.params
  stylist.softDeleteStylist(id)
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
//CREATE FORM TO EDIT A ROW ALREADY IN DATABASE ***********add this to (styles,customers,appointment,timeslot)
stylistRoutes.get('/:id/edit', (req,res)=> {
  const {id} = req.params
  stylist.viewOneStylist(id)
    .then( stylist => {
                      console.log('stylist::', stylist);
                      res.render('edit_stylist', {stylist})})
    .catch(error =>{
      res.json({
        messsage: error.message,
        error: error
      })
    })
})

stylistRoutes.put('/update/:id', (req,res)=> {
  const {id} = req.params
  const { name, stylist_bio, available} = req.body

  stylist.editStylist(name,stylist_bio,available,id)
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
module.exports = stylistRoutes
