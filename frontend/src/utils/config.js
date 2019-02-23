if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

let ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN

module.exports = {
  ACCESS_TOKEN
}
