const express = require("express")
const multer = require("multer")
const app = express()

// menyisipkan proses validasi token untuk keamanan
const validateToken = require("./auth/validateToken")
app.use(validateToken)

app.get("/", (req,res) => {
    // ambil data
})

app.get("/:customer_id", (req,res) => {
    // ambil data by id
})

app.post("/", (req,res) => {
    // insert data
})

app.put("/", (req,res) => {
    // update data
})

app.delete("/:customer_id", (req,res) => {
    // delete data
})

module.exports = app