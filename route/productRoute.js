const route = require("express").Router()
const {getProduct,postProduct,putProduct,deleteProduct} = require("../controller/productController")
const isAdmin = require("../middlerWare/admin")
const isAuth = require("../middlerWare/auth")

route.get("/",getProduct)
route.post("/",[isAdmin,isAuth],postProduct)
// route.post("/by",getProduct)
route.put("/:id",[isAdmin,isAuth],putProduct)
route.delete("/:id",[isAdmin,isAuth],deleteProduct)

module.exports = route