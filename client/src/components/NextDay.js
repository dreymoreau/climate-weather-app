import React from 'react'
import { useState } from 'react'

const NextDay = (props) => {
  let [lowTemp, setLowTemp] = useState(props.lowTemp);
  let [highTemp, setHighTemp] = useState(props.highTemp);
  let [day, setDay] = useState(props.day)
  let [weatherForecast, setWeatherForecast] = useState(props.weatherForecast)
  let [backgroundUrl, setBackgroundUrl] = useState(props.backgroundUrl)
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <div>
        <h5>Next Day</h5>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="" alt="Weather status" /></figure>
          <div className="card-body">
            <h2 className="card-title">{day}</h2>
            <div>
              <p>Low: {lowTemp}</p>
              <p>High: {highTemp}</p>
              <p>weatherStatus: {weatherForecast}</p>
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

export default NextDay