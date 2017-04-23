const fs = require('fs')
if(fs.existsSync('.env') ){
  require('dotenv').config()
}
const pgp = require('pg-promise')()
const db = pgp(connectingString)

const CREATE_STYLIST=`INSERT INTO appointments VALUES(1$,2$,$3)`
const VIEW_STYLIST=`SELECT * FROM stylist`
const UPDATE_STYLIST=`UPDATE stylist SET  name =$1,stylist_bio ='$2,available =$3`
const DELETE_STYLIST=`UPDATE stylist SET available = "false" WHERE id = $1`

const stylist ={
  createStylist:(Stylist_id,customer_id,Style_id,Timeslot_id,active)=>{
    return db.many(CREATE_STYLIST,[Stylist_id,customer_id,Style_id,Timeslot_id,active])
  },
  viewStylist:()=>{
    return db.many(VIEW_STYLIST,[])
  },
  editStylist:(Stylist_id,customer_id,Style_id,Timeslot_id,active,id)=>{
    return db.one(EDIT_STYLIST,[Stylist_id,customer_id,Style_id,Timeslot_id,active,id])
  },
  softDeleteStylist:(id)=>{
    return db.none(SOFTDELETE_STYLIST,[id])
  },
  viewSoftDeleteStylist:()=>{
    return db.many( VIEWSOFTDELETE_STYLIST,[])
  }
}
module.exports = { stylist }
