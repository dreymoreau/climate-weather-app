import React from 'react'
import NextDay from './NextDay'
import forecastData from '../data/open_meteo_forecast.json'

const NextDays = () => {
  let day_cnt = 7
  let next_days = [];
  for (let i = 0; i < day_cnt; i++) {
    next_days.push(
      <NextDay key={i}
        lowTemp={forecastData.daily.apparent_temperature_min[i]}
        highTemp={forecastData.daily.apparent_temperature_max[i]}
        day={new Intl.DateTimeFormat("en-US",  { weekday: "long" }).format(new Date(forecastData.daily.time[i]))}
        weathercode={forecastData.daily.weathercode[i]}
        degreeUnit={forecastData.daily_units.apparent_temperature_max}
        precipitationSum={forecastData.daily.precipitation_sum[i]}
        precipitationSumUnit={forecastData.daily_units.precipitation_sum}
        windspeedMax={forecastData.daily.windspeed_10m_max[i]}
        windspeedMaxUnit={forecastData.daily_units.windspeed_10m_max}
        UVIndexMax={forecastData.daily.uv_index_max[i]}
        UVIndexMaxUnit={forecastData.daily_units.uv_index_max}
      />
    )
  }
  return (
    <div className="container flex flex-col gap-4 max-w-md">
      {next_days}
    </div>
  )
}

export default NextDays