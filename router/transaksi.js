const express = require("express")
const multer = require("multer")
const app = express()

app.get("/", (req,res) => {
    // ambil data
})

app.get("/:transaksi_id", (req,res) => {
    // ambil data by id
})

app.post("/", (req,res) => {
    // insert data
})

app.put("/", (req,res) => {
    // update data
})

app.delete("/:transaksi_id", (req,res) => {
    // delete data
})

module.exports = app