import React from 'react'
import { useState } from 'react'
import {
  PiCloudDuotone,
  PiCloudFogDuotone,
  PiCloudLightningDuotone,
  PiCloudMoonDuotone,
  PiCloudRainDuotone,
  PiCloudSnowDuotone,
  PiCloudSunDuotone,
  PiSunDuotone,
} from 'react-icons/pi'

class ForecastType {
  constructor(text, component) {
    this.text = text
    this.component = component
  }
}

const ForecastTypeComponents = Object.freeze({
  0: new ForecastType("Sunny", <PiSunDuotone />),
  1: new ForecastType("Partly cloudy", <PiCloudSunDuotone />),
  2: new ForecastType("Partly cloudy", <PiCloudSunDuotone />), 
  3: new ForecastType("Partly cloudy", <PiCloudSunDuotone />),
  45: new ForecastType("Foggy", <PiCloudFogDuotone />),
  48: new ForecastType("Foggy", <PiCloudFogDuotone />),
  51: new ForecastType("Rainy", <PiCloudRainDuotone />),
  53: new ForecastType("Rainy", <PiCloudRainDuotone />),
  55: new ForecastType("Rainy", <PiCloudRainDuotone />),
  56: new ForecastType("Rainy", <PiCloudRainDuotone />),
  57: new ForecastType("Rainy", <PiCloudRainDuotone />),
  61: new ForecastType("Rainy", <PiCloudRainDuotone />),
  63: new ForecastType("Rainy", <PiCloudRainDuotone />),
  65: new ForecastType("Rainy", <PiCloudRainDuotone />),
  66: new ForecastType("Rainy", <PiCloudRainDuotone />),
  67: new ForecastType("Rainy", <PiCloudRainDuotone />),
  71: new ForecastType("Snowy", <PiCloudSnowDuotone />),
  73: new ForecastType("Snowy", <PiCloudSnowDuotone />),
  75: new ForecastType("Snowy", <PiCloudSnowDuotone />),
  77: new ForecastType("Snowy", <PiCloudSnowDuotone />),
  80: new ForecastType("Rainy", <PiCloudRainDuotone />),
  81: new ForecastType("Rainy", <PiCloudRainDuotone />),
  82: new ForecastType("Heavy rain", <PiCloudLightningDuotone />),
  85: new ForecastType("Snowy", <PiCloudSnowDuotone />),
  86: new ForecastType("Snowy", <PiCloudSnowDuotone />),
  95: new ForecastType("Thunderstorms", <PiCloudLightningDuotone />),
  96: new ForecastType("Thunderstorms / hail", <PiCloudLightningDuotone />),
  99: new ForecastType("Thunderstorms / heavy hail", <PiCloudLightningDuotone />),
})

const NextDay = (props) => {
  let [lowTemp, setLowTemp] = useState(props.lowTemp);
  let [highTemp, setHighTemp] = useState(props.highTemp);
  let [day, setDay] = useState(props.day)
  let [weathercode, setWeathercode] = useState(props.weathercode)
  let [degreeUnit, setDegreeUnit] = useState(props.degreeUnit)

  return (
    <section class="collapse">
      <input type="radio" name="forecast"/>
      <div className="flex justify-between items-center gap-4 collapse-title text-xl px-0">
        <span className="flex items-center gap-5">
          <span className="text-left text-md text-gray w-8 me-8">{day.slice(0, 3)}</span>
          <span className="text-5xl inline">{ForecastTypeComponents[weathercode].component}</span>
          <span className="text-gray text-md w-100px inline">{ForecastTypeComponents[weathercode].text}</span>
        </span>
        <span className="text-md font-bold super">
          <sup>{highTemp}{degreeUnit}</sup>
          <span className="m-1 text-gray">/</span>
          <sub className="text-gray">{lowTemp}{degreeUnit}</sub>
        </span>
      </div>
      <div className="collapse-content text-center">
        <p>weatherStatus: {weathercode}</p>
      </div>
    </section>
  )
}

export default NextDay