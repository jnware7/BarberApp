const db = require('./init')

const CREATE_APPOINTMENTS =`insert into appointments
( stylist_id, customer_id, style_id, timeslot_id )

VALUES (
   (select id from stylist where name = $1),
   (select id from customers where customer_name = $2),
   (select id from styles where style_name = $3),
   (select id from timeslot where slottime = $4)
 ) RETURNING *`
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
const VIEW_ONE_APPOINTMENTS = `SELECT * FROM appointments WHERE id = $1`
const EDIT_APPOINTMENTS =`UPDATE appointments
SET
Stylist_id=(select id from stylist where name= $1) ,customer_id=(select id from customers where customer_name=$2),Style_id=(select id from styles where style_name=$3),Timeslot_id=(select id from timeslot where slottime=$4),active=true
WHERE ID = $5 RETURNING *`
const SOFTDELETE_APPOINTMENTS =`UPDATE appointments
SET active= false
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
  createAppointments:(stylist_name,customer_name,style_name,slottime)=>{
    return db.many(CREATE_APPOINTMENTS,[stylist_name,customer_name,style_name,slottime])
  },
  viewAppointments:()=>{
    return db.many(VIEW_APPOINTMENTS,[])
  },
  viewOneAppointments:(id) => {
    return db.one(VIEW_APPOINTMENTS,[id])
  },
  editAppointments:(stylist_name,customer_name,style_name,time,id)=>{
    return db.one(EDIT_APPOINTMENTS,[stylist_name,customer_name,style_name,time,id])
  },
  softDeleteAppointments:(id)=>{
    return db.none(SOFTDELETE_APPOINTMENTS,[id])
  },
  viewSoftDeleteAppointments:()=>{
    return db.many( VIEWSOFTDELETE_APPOINTMENTS,[])
  }
}
module.exports =  appointments
