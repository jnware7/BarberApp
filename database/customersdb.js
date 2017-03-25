const db = require('./init')

const CREATE_CUSTOMERS = `INSERT INTO customers VALUES($1,$2)`

const VIEW_CUSTOMERS = `READ:(customer_name,paid,style_image,stylist_name,active)
SELECT customers.customer_name, customers.paided, styles.style_image, stylist.name AS stylist_name
FROM customers
JOIN appointments
ON customers.id = appointments.id
JOIN stylist
ON appointments.stylist_id = stylist.id
JOIN styles
ON appointments.style_id = styles.id
WHERE active = 'true'`
const VIEW_ONE_CUSTOMERS = `SELECT * FROM customers WHERE id =$1`
const UPDATE_CUSTOMERS = `UPDATE CUSTOMERS SET customer_name = $1 paid= $2 WHERE ID = $3;`

const DELETE_CUSTOMERS = `DELETE FROM Customers WHERE id = $1`



const customers = {
  createCustomers:(customer_name, paid) => {
    return db.one(CREATE_CUSTOMERS,[customer_name, paid])
  },
  viewCustomers:() => {
    return db.many(VIEW_CUSTOMERS,[])
  },
  viewOneCustomers:(id)=>{
    return db.one(VIEW_ONE_CUSTOMERS,[id])
  },
  editCustomers:(customer_name,paid,id) =>{
    return db.one(UPDATE_CUSTOMERS,[customer_name,paid,id])
  },
  deleteCustomers:(id)=>{
    return db.none(DELETE_CUSTOMERS,[id])
  }
}
module.exports = customers
