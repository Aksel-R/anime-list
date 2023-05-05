var express = require('express');
var router = express.Router();


const {getAllUsers,getOneUser, addOne}=require("../controller/users")
/* GET users listing. */
router.get('/All',getAllUsers)
router.get('/:id',getOneUser)
router.post('/add/user',addOne)

module.exports = router;
