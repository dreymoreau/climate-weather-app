import React from 'react'
import NextDay from './NextDay'
import forecastData from '../data/forecast_data.json'

const NextDays = () => {
  return (
    <div className="">
        {
          forecastData.map(( {lowTemp, highTemp, day, weatherForecast, backgroundUrl }, index) =>
          <NextDay key={index}
            lowTemp={lowTemp} highTemp={highTemp} day={day} weatherForecast={weatherForecast} backgroundUrl={backgroundUrl} />)
        }
    </div>
  )
}

export default NextDays