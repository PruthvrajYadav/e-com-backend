const express = require("express")
const mongoose = require("mongoose")
require("dotenv/config")
const cors = require("cors")

const product = require("./route/productRoute")
const user = require("./route/userRoute")
const category = require("./route/categoryRoute")
const order = require("./route/orderRoute")

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("hii this is ecom backend api")
})

app.use("/api/product", product)
app.use("/api/user", user)
app.use("/api/category", category)
app.use("/api/order", order)

app.listen(process.env.PORT, () => {
    console.log("running....🏃‍♂️‍➡️");
})

async function db() {
    try {
        const con = await mongoose.connect(process.env.DB)
        console.log(con.default.STATES.connected);

    } catch (error) {
        console.log(error.message);

    }
} db()
