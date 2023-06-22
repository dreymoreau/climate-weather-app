import React from 'react'
import NextDay from './NextDay'
import forecastData from '../data/forecast_data.json'

const NextDays = () => {
  return (
    <div>
      {/* <NextDay lowTemp={56} highTemp={78} day="Thursday" weatherForecast="Sunny" backgroundUrl="www.google.com" /> */}
      {
        forecastData.map(( {lowTemp, highTemp, day, weatherForecast, backgroundUrl }, index) =>
         <NextDay key={index}
          lowTemp={lowTemp} highTemp={highTemp} day={day} weatherForecast={weatherForecast} backgroundUrl={backgroundUrl} />)
      }
    </div>
  )
}

export default NextDays