const router = require("express").Router()

const { getOrder, deleteOrder, putOrder, postOrder } = require("../controller/orderController")
const isAuth = require("../middlerWare/auth")

router.get("/",getOrder)
router.post("/",isAuth,postOrder)
router.put("/:id",isAuth,putOrder)
router.delete("/:id",isAuth,deleteOrder)

module.exports = router