
var express = require('express');
var path = require('path');
var cors =require('cors')
const usersRouter=require("./routes/users")
const listRouter=require("./routes/userList")
const animeRouter = require('./routes/anime');


var app = express();
var Port=5000 




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use("/",usersRouter)
app.use("/anime",animeRouter)
app.use("/list",listRouter)






app.listen(Port,()=> console.log(`Server is listening to port ${Port}`))

module.exports = app;
