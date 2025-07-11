const {getCategory,postCategory,putCategory,deleteCategory} = require("../controller/catogaryControler")
const isAdmin = require("../middlerWare/admin")
const isAuth = require("../middlerWare/auth")
const router = require("express").Router()

router.get("/",getCategory)
router.post("/",[isAdmin,isAuth],postCategory)
router.put("/:id",[isAdmin,isAuth],putCategory)
router.delete("/:id",[isAdmin,isAuth],deleteCategory)

module.exports = router