const fs = require('fs')
if(fs.existsSync('.env')){
  require('dotenv').config()
}

const connectingString = process.env.DATABASE_URL

const pgp = require('pg-promise')()

const db = pgp(connectingString)

const CREATE_CUSTOMER = `INSERT INTO customers VALUES($1,$2)`

const VIEW_CUSTOMER = `READ:(customer_name,paid,style_image,stylist_name,active)

SELECT customers.customer_name, customers.paided, styles.style_image, stylist.name AS stylist_name
FROM customers
JOIN appointments
ON customers.id = appointments.id
JOIN stylist
ON appointments.stylist_id = stylist.id
JOIN styles
ON appointments.style_id = styles.id
WHERE active = 'true'`

const UPDATE_CUSTOMERS = `UPDATE CUSTOMERSSET customer_name = 'Pune' WHERE ID = $1;`

const DELETE_CUSTOMERS = `DELETE FROM Customers WHERE id = $1`



const customers ={
  createCustomers:() => {
    return db.one(CREATE_CUSTOMERS,[id])
  },
  viewCustomer:() => {
    return db.many(VIEW_CUSTOMER,[])
  }
},
modules.export = {customers};
