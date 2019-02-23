import React from "react"
import Data from "./Data"

const average = data => {
  let sensor1 = 0
  let sensor2 = 0
  let sensor3 = 0
  let sensor4 = 0
  data.forEach(d => {
    sensor1 += d.sensor1
    sensor2 += d.sensor2
    sensor3 += d.sensor3
    sensor4 += d.sensor4
  })
  sensor1 /= data.length
  sensor2 /= data.length
  sensor3 /= data.length
  sensor4 /= data.length
  return (
    <div>
      <h3>Average of all gathered sensor data:</h3>
      <div>
        <strong>Sensor 1:</strong> {sensor1}
      </div>
      <div>
        <strong>Sensor 2:</strong> {sensor2}
      </div>
      <div>
        <strong>Sensor 3:</strong> {sensor3}
      </div>
      <div>
        <strong>Sensor 4:</strong> {sensor4}
      </div>
      <p />
    </div>
  )
}

const peak = data => {
  let sensor1 = 0
  let sensor2 = 0
  let sensor3 = 0
  let sensor4 = 0
  data.forEach(d => {
    if (d.sensor1 > sensor1) sensor1 = d.sensor1
    if (d.sensor2 > sensor2) sensor2 = d.sensor2
    if (d.sensor3 > sensor3) sensor3 = d.sensor3
    if (d.sensor4 > sensor4) sensor4 = d.sensor4
  })

  return (
    <div>
      <h3>The peak of every sensor:</h3>
      <div>
        <strong>Sensor 1:</strong> {sensor1}
      </div>
      <div>
        <strong>Sensor 2:</strong> {sensor2}
      </div>
      <div>
        <strong>Sensor 3:</strong> {sensor3}
      </div>
      <div>
        <strong>Sensor 4:</strong> {sensor4}
      </div>
      <p />
    </div>
  )
}

const bottom = data => {
  let sensor1 = 2147000000
  let sensor2 = 2147000000
  let sensor3 = 2147000000
  let sensor4 = 2147000000
  data.forEach(d => {
    if (d.sensor1 < sensor1) sensor1 = d.sensor1
    if (d.sensor2 < sensor2) sensor2 = d.sensor2
    if (d.sensor3 < sensor3) sensor3 = d.sensor3
    if (d.sensor4 < sensor4) sensor4 = d.sensor4
  })

  return (
    <div>
      <h3>The bottom of every sensor:</h3>
      <div>
        <strong>Sensor 1:</strong> {sensor1}
      </div>
      <div>
        <strong>Sensor 2:</strong> {sensor2}
      </div>
      <div>
        <strong>Sensor 3:</strong> {sensor3}
      </div>
      <div>
        <strong>Sensor 4:</strong> {sensor4}
      </div>
      <p />
    </div>
  )
}

const Home = ({ currentData, newData, allData }) => (
  <div>
    <h3>Current data:</h3>
    <Data data={currentData} />
    <button onClick={() => newData()}>Submit data to database</button>
    {average(allData)}
    {peak(allData)}
    {bottom(allData)}
  </div>
)

export default Home
