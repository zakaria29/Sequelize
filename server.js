const express = require("express")
const app = express()
const product = require("./router/product")
const customer = require("./router/customer")
const transaksi = require("./router/transaksi")
const admin = require("./router/admin")
const auth = require("./router/auth/auth")

app.use("/product",product)
app.use("/customer", customer)
app.use("/transaksi", transaksi)
app.use("/admin", admin)
app.use("/auth", auth)

app.listen(8000, () => {
    console.log("server run on port 8000");
})