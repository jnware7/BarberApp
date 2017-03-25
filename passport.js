// const passport = require('passport')
// const LocalStrategy = require('passport-local').Strategy
// const User = require('./database/userdb').User
// const paramsOptions = {
//   userNameField: 'email'
// }
// const findUser = (email, password) => {
//   return User.find( email, password)
// }
// const findUserById = id => {
//   return User.findById( id )
// }
// const Strategy = new LocalStrategy( paramsOptions( email, password, done) => {
//   findUser( email , password)
//   .then( user =>{
//     if(user === null){
//       done( null, false,{ message: 'Incorrect email or password'
//       })
//       else{
//         done(null, user)
//
//       }
//     }
//   }).catch( error => done( err))
// })
//
// passport.use( strategy)
//
// passport.serializeUser((user,done)=>done(null,user.id))
// passport.deserializeUser((id,done)=>{
//   findUserById(id)
//   .then(user=> done(null, user))
//   .catch(error => done(error,null))
// })
// module.export = passport
