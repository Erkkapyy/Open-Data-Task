import React from "react"
import Data from "./Data"

const History = ({ allData }) => (
  <div>
    <h3>History of past data:</h3>
    {allData.map(data => (
      <Data key={data.id} data={data} />
    ))}
  </div>
)

export default History
