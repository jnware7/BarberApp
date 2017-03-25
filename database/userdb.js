// const db = require('./init')
//
// const User = {
//   find: ( email, password ) => {
//     return db.oneOrNone( 'SELECT * FROM users WHERE email =$1',[email])
//     .then( user => comparePassword(password,user))
//   },
//   findById: id => db.one('SELECET * FROM users WHERE id=$1' ,[id]),
//
// createOne( email,password) => {
//   return createSalt( password )
//   .then ( hashPassword )
//   .then( hash => {
//     return db.one(
//       'INSERT INTO user( email,password ) VALUES($1,$2)RETURNING *',[email,hash]
//     )
//   })
//  }
// }
// module.exports = user
