const fs = require('fs')
if(fs.existsSync('.env')){
  require('dotenv').config()
}

const connectingString = process.env.DATABASE_URL

const pgp = require('pg-promise')()

const db = pgp(connectingString)

const CREATE_STYLES = `INSERT INTO styles
VALUES($1,$2,$3)`

const VIEW_STYLES =`SELECT  styles.style_image, stylist.name AS stylist_name
FROM customers
JOIN appointments
ON customers.id = appointments.id
JOIN stylist
ON appointments.stylist_id = stylist.id
JOIN styles
ON appointments.style_id = styles.id
WHERE active = 'true'`

const UPDATE_STYLES =`UPDATE styles
SET Style_name = $1,style_image = $2 ',style_duration = $3
WHERE ID = $4;`

const DELETE_STLYES = `DELETE FROM styles
WHERE id = $1`

const styles ={
  createStyles:(Style_name,Style_image,Style_duration) => {
      return db.many(CREATE_STYLES,[Style_name,Style_image,Style_duration])
  },
  viewStyles:() => {
    return db.many(VIEW_STYLES,[])
  },
  updateStyles:(Style_name,Style_image,Style_duration) => {
    return db.many(UPDATE_STYLES,[Style_name,Style_image,Style_duration])
  },
  deleteStyles: (id) => {
    return db.none(DELETE_STLYES,[id])
  }
},
modules.export = {styles};
