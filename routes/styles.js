var express = require('express')
var styles = require('../database/stylesdb')

const stylesRoutes = new express.Router()
//CREATE
stylesRoutes.get('/', (req,res) => {
  styles.createStyles()
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
stylesRoutes.get('/', (req,res) => {
  styles.viewStyles()
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
stylesRoutes.get('/new', (req,res)=> {
  res.render('new_styles')
});
//DELETE
stylesRoutes.delete('/:id', (req,res)=> {const {id} = req.params
  styles.deleteStylist(id)
  .then(styles =>{
    res.status(200).json({ status: 'success', message: 'deleted style'})
  })
  .catch(error =>{
    res.json({
      messsage: error.message,
      error: error
    })
  })
});
//READ ONE
stylesRoutes.get('/:id', (req,res) => {
  const {id} = req.params
  styles.viewOneStyles(id)
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

//CREATE FORM TO EDIT A ROW ALREADY IN DATABASE
stylesRoutes.put('/edit/:id', (req,res)=> {
  const {id} = req.params
  const { name, styles_bio, available} = req.body

  styles.editStylist(Style_name,Style_image,Style_duration,price)
  .then( styles => {
    console.log(styles)
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


module.exports = stylesRoutes
