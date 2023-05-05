const {getList,add,deleting,update}=require("../dataBase/modules/userList")



module.exports={

getListUser:function(req,res){
    getList(req.params.id,function(err,result){
        if(err) console.log(err)
        else res.json(result)
    })
},
addUser: function(req,res){
    add(req.body,function(err,result){
        if(err) console.log(err)
        else res.json(result)
    }) 
},deleteItem: function(req,res){
    deleting(req.params,function(err,result){
        if(err) console.log(err)
        else res.json(result)
    })
    
},
updateStatus:function(req,res){
    update(req.body,function(err,result){
        if(err) console.log(err)
        else res.json(result)
    })
    
}

}