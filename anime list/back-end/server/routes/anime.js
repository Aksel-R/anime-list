var express = require('express');
var router = express.Router();


const {getAllAnime,updateOneAnime,deleteOneAnime}=require("../controller/anime")



router.get('/All',getAllAnime)
router.patch('/update',updateOneAnime)
router.delete("/delete/:id",deleteOneAnime)



module.exports = router;