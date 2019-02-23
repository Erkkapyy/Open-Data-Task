import React from "react"

const Data = response => {
  console.log("Data from eficode API: ", response)

  return (
    <>
      <div>
        <strong>Date:</strong> {response.data.date}
      </div>
      <div>
        <strong>Sensor 1:</strong> {response.data.sensor1}
      </div>
      <div>
        <strong>Sensor 2:</strong> {response.data.sensor2}
      </div>
      <div>
        <strong>Sensor 3:</strong> {response.data.sensor3}
      </div>
      <div>
        <strong>Sensor 4:</strong> {response.data.sensor4}
      </div>
      <p />
    </>
  )
}

export default Data
