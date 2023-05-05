var express = require('express');
var router = express.Router();


const {getListUser,addUser,deleteItem,updateStatus}=require("../controller/userList")



router.get("/:id",getListUser)
router.post("/add",addUser)
router.delete("/:uid/:aid",deleteItem)
router.patch('/update',updateStatus)





module.exports = router;