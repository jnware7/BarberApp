const fs = require('fs')
if(fs.existsSync('.env') ){
  require('dotenv').config()
}
const pgp = require('pg-promise')()
const db = pgp(connectingString)

const CREATE_APPOINTMENTS =`INSERT INTO appointments VALUES($1, $2, $3, $4, $5)`
const VIEW_APPOINTMENTS =`SELECT customers.customer_name, customers.paided, styles.style_image, stylist.name AS stylist_name,timeslot.slottime,style_duration,price
FROM customers
JOIN appointments
ON customers.id = appointments.id
JOIN stylist
ON appointments.stylist_id = stylist.id
JOIN styles
ON appointments.style_id = styles.id
JOIN timeslot
ON appointments.timeslot_id = timeslot.id
WHERE active = 'true'`
const EDIT_APPOINTMENTS =`UPDATE appointments SET Stylist_id=$1,customer_id=$2,Style_id=$3,Timeslot_id=$4,active=$5
WHERE ID = $6`
const SOFTDELETE_APPOINTMENTS =`UPDATE appointments
SET active= "false"
WHERE id = $1`
const VIEWSOFTDELETE_APPOINTMENTS =`SELECT customers.customer_name, customers.paided, styles.style_image, stylist.name AS stylist_name,timeslot.slottime,style_duration,price
FROM customers
JOIN appointments
ON customers.id = appointments.id
JOIN stylist
ON appointments.stylist_id = stylist.id
JOIN styles
ON appointments.style_id = styles.id
JOIN timeslot
ON appointments.timeslot_id = timeslot.id
WHERE active = 'false'
`

const appointments ={
  createAppointments:(Stylist_id,customer_id,Style_id,Timeslot_id,active)=>{
    return db.many(CREATE_APPOINTMENTS,[Stylist_id,customer_id,Style_id,Timeslot_id,active])
  },
  viewAppointments:()=>{
    return db.many(VIEW_APPOINTMENTS,[])
  },
  editAppointments:(Stylist_id,customer_id,Style_id,Timeslot_id,active,id)=>{
    return db.one(EDIT_APPOINTMENTS,[Stylist_id,customer_id,Style_id,Timeslot_id,active,id])
  },
  softDeleteAppointments:(id)=>{
    return db.none(SOFTDELETE_APPOINTMENTS,[id])
  },
  viewSoftDeleteAppointments:()=>{
    return db.many( VIEWSOFTDELETE_APPOINTMENTS,[])
  }
}
module.exports =  appointments 
