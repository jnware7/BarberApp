const db = require('./init')

const CREATE_STYLES = `INSERT INTO styles
VALUES($1,$2,$3)`

const VIEW_STYLES =`SELECT  * FROM styles`
const VIEW_ONE_STYLES =`SELECT  * FROM styles WHERE id = $1`
const UPDATE_STYLES =`UPDATE styles
SET Style_name = $1,style_image = $2 ',style_duration = $3
WHERE ID = $4;`

const DELETE_STLYES = `DELETE FROM styles
WHERE id = $1`

const styles ={
  createStyles:(Style_name,Style_image,Style_duration,price) => {
      return db.many(CREATE_STYLES,[Style_name,Style_image,Style_duration,price])
  },
  viewStyles:() => {
    return db.many(VIEW_STYLES,[])
  },
  viewOneStyles:(id) => {
    return db.one(VIEW_STYLES,[id])
  },
  editStyles:(Style_name,Style_image,Style_duration,price) => {
    return db.many(UPDATE_STYLES,[Style_name,Style_image,Style_duration])
  },
  deleteStyles: (id) => {
    return db.none(DELETE_STLYES,[id])
  }
}
module.export = styles
