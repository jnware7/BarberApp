// var express = require('express')
// var appointments = require('../database/usersdb')
// const passport = require('../passport')
// const authOptions = {
//   successRedirect:'/',
//   failureRedirect:'user/login'
// }
// const User = require('../database/userdb').User
// const signupRoutes = new express.Router()
//
// app.get('/signup', function(req,res,next){
//   res.render('signup');
// })
//
// app.post('/signup',(req,res,next)=>{
//   const{ email, password}=req.body
//
//   User.createOne(email,password)
//   .then(user =>{
//     req.login({
//       id:user.id,
//       email
//     }, error =>{
//       if(error){
//         next(error)
//       }
//       res.redirect('/')
//     })
//   })
//   .catch(error=>{
//     res.render('signup',{
//       message: 'Login Failed'
//     })
//   })
// })
//
// module.exports = loginRoutes
