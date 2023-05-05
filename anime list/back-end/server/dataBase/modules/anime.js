const conn=require("../index")


module.exports={
    getAll: function(callback){
        const sql="select * from `anime list`"
        conn.query(sql,function(err,result){
            callback(err,result)
        })
    }

}