const dataRouter = require("express").Router()
const Data = require("../models/data")

dataRouter.get("/", async (request, response) => {
  const data = await Data.find({})
  console.log(data)
  response.json(data.map(data => data.toJSON()))
})

dataRouter.post("/", async (request, response, next) => {
  const body = request.body
  try {
    const data = new Data({
      ...body
    })

    const savedData = await data.save()
    response.json(savedData.toJSON())
  } catch (exception) {
    next(exception)
  }
})

module.exports = dataRouter
