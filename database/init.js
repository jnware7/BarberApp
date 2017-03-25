// const fs = require('fs')
// if(fs.existsSync('.env') ){
//   require('dotenv').config()
// }

let connectionString = 'http://localhost:5432/BarberApp'
const pgp = require('pg-promise')()
const db = pgp(connectionString)

module.exports = db
const{
  createSalt,
  hashPassword,
  comparePassword
}=require('../auth/hashpassword')
