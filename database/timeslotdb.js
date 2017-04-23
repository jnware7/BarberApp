const fs = require('fs')
if(fs.existsSync('.env') ){
  require('dotenv').config()
}
const pgp = require('pg-promise')()
const db = pgp(connectingString)

const CREATE_TIME = `INSERT INTO Timeslot VALUES($1)`
const VIEW_TIME =`SELECT customers.customer_name, customers.paided, styles.style_image, stylist.name AS stylist_name,timeslot.slottime
FROM customers
JOIN appointments
ON customers.id = appointments.id
JOIN stylist
ON appointments.stylist_id = stylist.id
JOIN styles
ON appointments.style_id = styles.id
JOIN timeslot
ON timeslot_id = customers.id
WHERE active = 'true' AND stylist.id = $1
ORDER BY slottime ASC`

const EDIT_TIME =`UPDATE timeslot SET slottime = $1 WHERE ID = $2;`
const DELETE_TIME = `DELETE FROM timeslot WHERE id = $1`

const timeslot ={
  createTime:(time)=>{
    return db.one(CREATE_TIME,[time])
  },
  viewTime:(id)=>{
    return db.many(VIEW_TIME,[id])
  },
  editTime:(slottime)=>{
    return db.one(EDIT_TIME,[slottime])
  },
  deleteTime:(id)=>{
    return db.none(DELETE_TIME,[id])
  }
}
module.exports = { timeslot }
