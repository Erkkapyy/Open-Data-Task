const express = require("express")
const app = express()
const config = require("./util/config")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const dataRouter = require("./controllers/data")

console.log("commecting to", config.MONGODB_URI)

mongoose
  .connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to MongoDB")
  })
  .catch(error => {
    console.log("error connection to MongoDB:", error.message)
  })

app.use(express.static("build"))
app.use(bodyParser.json())

app.use("/api/data", dataRouter)

module.exports = app
