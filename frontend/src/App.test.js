import React from "react"
import { render, fireEvent } from "react-testing-library"
import App from "./App"
import "jest-dom/extend-expect"

describe("<App />", () => {
  it("Components of home page are shown", async () => {
    const component = render(<App />)
    component.rerender(<App />)

    expect(component.container).toHaveTextContent("Open data task")
    expect(component.container).toHaveTextContent(
      "Average of all gathered sensor data"
    )
    expect(component.container).toHaveTextContent("The peak of every sensor")
    expect(component.container).toHaveTextContent("The bottom of every sensor")
  })

  it("Contents of history page are shown", async () => {
    const component = render(<App />)
    component.rerender(<App />)
    const { getByText } = component
    const button = getByText("history")
    fireEvent.click(button)

    expect(component.container).toHaveTextContent("Open data task")
    expect(component.container).toHaveTextContent("History of past data")
  })
})
