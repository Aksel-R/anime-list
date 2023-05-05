const conn=require("../index")


module.exports={
    getAll: function(callback){
        const sql="select * from `anime list`"
        conn.query(sql,function(err,result){
            callback(err,result)
        })
    },

    updateOne: function(anime, callback) {
        const sql = "UPDATE `anime list` SET `anime name` = '" + anime.name + "', `img` = '" + anime.url + "', `genre` = '" + anime.genre + "', `description` = '" + anime.des + "' WHERE `animeID` = " + anime.id;
      
        conn.query(sql, function(err, result) {
          callback(err, result);
        });
      },
      deleteOne:function(id, callback) {
        const sql = "SET FOREIGN_KEY_CHECKS=0; DELETE FROM `anime list` WHERE `animeID`=" + `${id} SET FOREIGN_KEY_CHECKS=1;`;
        conn.query(sql, function(err, result) {
          callback(err, result);
        });
      }
      
    
    }

