const express = require("express")
const app = express()
const product = require("./router/product")
const customer = require("./router/customer")
const transaksi = require("./router/transaksi")
app.use("/product",product)
app.use("/customer", customer)
app.use("/transaksi", transaksi)

app.listen(8000, () => {
    console.log("server run on port 8000");
})