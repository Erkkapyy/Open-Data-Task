import React, { useState, useEffect } from "react"
import dataService from "./services/data"
import Notification from "./components/Notification"
import config from "./utils/config"
import Home from "./components/Home"
import History from "./components/History"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const App = () => {
  const [currentData, setCurrentData] = useState({})
  const [allData, setAllData] = useState([])
  const [message, setMessage] = useState(null)
  const [status, setStatus] = useState("")

  useEffect(() => {
    dataService.setToken(config.ACCESS_TOKEN)
    dataService
      .getData()
      .then(fetchedData => {
        setCurrentData(fetchedData)
        console.log("fetched data:", currentData)
      })
      .then(console.log(currentData))
    dataService.getHistory().then(history => {
      setAllData(history)
    })
  }, [])

  const newData = async () => {
    try {
      const newObject = {
        ...currentData
      }
      const addedData = await dataService.create(newObject)
      setAllData(allData.concat(addedData))
      setStatus("success")
      setMessage("New data succesfully added")
      setTimeout(() => {
        setMessage(null)
        setStatus("")
      }, 5000)
    } catch (exception) {
      setStatus("error")
      setMessage("This data already exists in the database!")
      setTimeout(() => {
        setMessage(null)
        setStatus("")
      }, 5000)
      console.log(exception)
    }
  }
  const padding = { padding: 5 }
  return (
    <div>
      <Router>
        <div>
          <div>
            <Link style={padding} to="/">
              home
            </Link>
            <Link style={padding} to="/history">
              history
            </Link>
          </div>
          <Notification message={message} status={status} />
          <h1>Open data Task</h1>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                currentData={currentData}
                newData={newData}
                allData={allData}
              />
            )}
          />
          <Route
            exact
            path="/history"
            render={() => <History allData={allData} />}
          />
        </div>
      </Router>
    </div>
  )
}

export default App
