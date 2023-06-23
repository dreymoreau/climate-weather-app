import React from 'react'
import { useState } from 'react'

const Today = (props) => {
  let [currentTemp, setCurrentTemp] = useState(props.currentTemp);
  let [lowTemp, setLowTemp] = useState(props.lowTemp);
  let [highTemp, setHighTemp] = useState(props.highTemp);
  let [day, setDay] = useState(props.day)
  let [weatherStatus, setWeatherStatus] = useState(props.weatherStatus)
  let [backgroundUrl, setBackgroundUrl] = useState(props.backgroundUrl)
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card backdrop-opacity-50 bg-stormy bg-no-repeat">
        <div className="card-body">
          <h2 className="card-title">{day}</h2>
          <div>
            <p>Low: {lowTemp}</p>
            <p>High: {highTemp}</p>
            <p>weatherStatus: {weatherStatus}</p>
            <p className="overflow-hidden">backgroundUrl: {backgroundUrl}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-sm">Expand for more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Today