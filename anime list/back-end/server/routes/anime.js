var express = require('express');
var router = express.Router();


const {getAllAnime}=require("../controller/anime")



router.get('/All',getAllAnime)




module.exports = router;