const db = require('./init')

const CREATE_STYLIST=`INSERT INTO appointments VALUES(1$,2$,$3)`
const VIEW_STYLIST=`SELECT * FROM stylist`
const VIEW_ONE_STYLIST=`SELECT * FROM stylist WHERE id = $1`
const UPDATE_STYLIST=`UPDATE stylist SET  name =$1,stylist_bio ='$2,available = $3`
const DELETE_STYLIST=`UPDATE stylist SET available = "false" WHERE id = $1`
const VIEWSOFTDELETE_STYLIST = `SELECT * FROM appointments WHERE active = false`
const stylist ={
  createStylist:(name,stylist_bio,available)=>{
    return db.many(CREATE_STYLIST,[name,stylist_bio,available])
  },
  viewStylist:()=>{
    return db.many(VIEW_STYLIST,[])
  },
  viewOneStylist:(id)=>{
      return db.one(VIEW_ONE_STYLIST,[id])
    },
  editStylist:(name,stylist_bio,available,id)=>{
    return db.one(EDIT_STYLIST,[name,stylist_bio,available,id])
  },
  softDeleteStylist:(id)=>{
    return db.none(SOFTDELETE_STYLIST,[id])
  },
  viewSoftDeleteStylist:()=>{
    return db.many( VIEWSOFTDELETE_STYLIST,[])
  }
}
module.exports =  stylist
