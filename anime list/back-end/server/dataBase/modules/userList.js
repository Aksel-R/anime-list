const conn=require("../index")






   
module.exports={
    getList:function(id,callback){
        const sql="SELECT l.usersID, l.animeID, l.status, u.username, al.`anime name`, al.img , al.genre, al.description FROM `user list` l  INNER JOIN `users` u ON l.usersID = u.usersID INNER JOIN `anime list` al ON l.animeID = al.animeID WHERE l.usersID = ?"
    conn.query(sql,id,function(err,result){
        callback(err,result)
    })
    },
    add:function(listing,callback){
const sql='INSERT INTO `user list` (usersID, animeID, status) values (?,?,?)'
conn.query(sql,[listing.usersID,
    listing.animeID,
    listing.status],function(err,result){
    callback(err,result)
})
    },
    deleting:function(item,callback){
        const sql = 'delete from `user list` where animeID=? and usersID=?'
        conn.query(sql,[item.aid,item.uid],function(err,result){
            callback(err,result)
        })
    },
    update:function(item,callback){
       const sql="UPDATE `user list` SET  "+ `status =${item.status} WHERE usersID=${item.usersID}  AND animeID = ${item.animeID}`
       conn.query(sql,function(err,result){
        callback(err,result)
       })
    }
}