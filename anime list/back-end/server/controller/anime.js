const {getAll}=require("../dataBase/modules/anime")



module.exports={
    getAllAnime:function(req,res){
        getAll(function(err,results){
            if(err) console.log(err)
            else res.json(results)
        })
    }
}