const {getAll,updateOne,deleteOne}=require("../dataBase/modules/anime")



module.exports={
    getAllAnime:function(req,res){
        getAll(function(err,results){
            if(err) console.log(err)
            else res.json(results)
        })
    },
    updateOneAnime:function(req,res){
        updateOne(req.body,function(err,result){
            if(err) console.log(err)
            else res.json(result)
        })
    },
    deleteOneAnime:function(req,res){
        deleteOne(req.params.id,function(err,result){
            if(err) console.log(err)
            else res.json(result)
        })
    }
}