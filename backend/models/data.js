const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")

const dataSchema = mongoose.Schema({
  date: { type: String, required: true, unique: true },
  sensor1: { type: Number, required: true },
  sensor2: { type: Number, required: true },
  sensor3: { type: Number, required: true },
  sensor4: { type: Number, required: true }
})

dataSchema.plugin(uniqueValidator)

dataSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model("Data", dataSchema)
