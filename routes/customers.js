var express = require('express')
var customer = require('../database/customersdb')

const customersRoutes = new express.Router()
//CREATE
customersRoutes.get('/', (req,res) => {
  customers.createCustomers(customer_name, paid)
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
customersRoutes.get('/:id', (req,res) => {
  const {id} = req.params
  customers.viewOneCustomers(id)
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
customersRoutes.get('/', (req,res) => {
  customers.viewCustomers()
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
customersRoutes.put('/edit/:id', (req,res)=> {
  const {id} = req.params
  const { name, customer_bio, available} = req.body

  customers.editCustomers(customer_name,paid,id)
  .then( customer => {
    console.log(customer)
    res.status(200).json({
      status: "success",
      data: appointment,
      message: 'Updated Customer Info'
    })
  })
  .catch(error =>{
    res.json({
      messsage: error.message,
      error: error
    })
  })
});
//DISPLAY FORM TO ADD NEW ROW  DATABASE
customersRoutes.get('/new', (req,res)=> {
  res.render('new_customer')
});
//DELETE
customersRoutes.delete('/:id', (req,res)=> {const {id} = req.params
  customers.deleteCustomers(id)
  .then(customer =>{
    res.status(200).json({ status: 'success', message: 'deleted customer'})
  })
  .catch(error =>{
    res.json({
      messsage: error.message,
      error: error
    })
  })
});

module.exports = customersRoutes
