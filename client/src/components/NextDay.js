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
    <div class="collapse">
      <input type="radio" name="forecast" checked="checked" />
      <div className="collapse-title text-xl px-0">
        <p>Low: {lowTemp}</p>
        <p>High: {highTemp}</p>
      </div>
      <div className="collapse-content">
        <p>weatherStatus: {weatherForecast}</p>
      </div>
    </div>
  )
}

export default NextDay