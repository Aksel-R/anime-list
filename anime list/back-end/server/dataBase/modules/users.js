const conn=require("../index")


module.exports={
getAll: function(Callback){
    const sql= 'select * from `users`'
    conn.query(sql,function(err, result){
      Callback(err,result)
    })
},
getOne:function(id,callback){
    const sql=' select * from users where usersID=?'
conn.query(sql,id,function(err,result){
    callback(err,result)
})
},
addUser: function(user,callback){
    const sql=' insert into users set ?'
    conn.query(sql,user,function(err,result){
        callback(err,result)
    })
        
    
}

}