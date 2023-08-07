//*NOT CERTAIN WHERE TO PUT THIS??????*/
// import React from 'react'


// const WeatherForecast = () => {
//   const [forecastData, setForecastData] = useState(null);

//   useEffect(() => {
//     // Get user's geolocation
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           const { latitude, longitude } = position.coords;

//           try {
//             const response = await axios.get(`/api/getForecast?latitude=${latitude}&longitude=${longitude}`);
//             setForecastData(response.data);
//           } catch (error) {
//             console.log('Error:', error);
//           }
//         },
//         (error) => {
//           console.log('Geolocation error:', error);
//         }
//       );
//     }
//   }, []);

//   return (
//     <div>
//       <h2>Weather Forecast</h2>
//       {forecastData ? (
//         <pre>{JSON.stringify(forecastData, null, 2)}</pre>
//       ) : (
//         <p>Loading forecast data...</p>
//       )}
//     </div>
//   );
// };



// export default WeatherForecast;