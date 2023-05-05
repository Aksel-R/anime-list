const {getAll,getOne,addUser}=require("../dataBase/modules/users")



module.exports={
    getAllUsers:function(req,res){
        getAll( function(err, results){
            if(err) console.log(err)
            else res.json(results)
        })
    },
    getOneUser:function(req,res){
        getOne(req.params.id,function(err,result){
            if(err)console.log(err)
            else res.json(result)
        })
    },
    addOne:function(req,res){
        addUser(req.body,function(err,result){
            if(err) console.log(err)
            else res.json(result)
        })
    }
}