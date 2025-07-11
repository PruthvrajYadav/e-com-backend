const route = require("express").Router()
const {getUser,postUser,login} = require("../controller/UserControler")

route.get("/",getUser)
route.post("/",postUser)
route.post("/login",login)

module.exports = route