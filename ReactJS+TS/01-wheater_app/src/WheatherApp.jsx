import { useState } from "react"

export const WeatherApp = () => {

  const baseApiUrl = 'https://api.openweathermap.org/data/2.5/weather'
  const API_KEY = '751c6dcb61cfd87099bc56464ec82a64'

  const [city, setCity] = useState('')
  const [dataWeather, setDataWeather] = useState(null)

  const handleChangeCity = (e) => {
    setCity(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.length > 0) fetchWeather() 
  }

  const fetchWeather = async () => {
    try {
      const response = await fetch(`${baseApiUrl}?q=${city}&appid=${API_KEY}&units=metric`)
      const data = await response.json()
      setDataWeather(data)
    } catch (error) {
      console.error(`OCURRIO EL SIGUIENTE PROBLEMA: ${error}`)
    }
  }

  return (
    <div className="container" >
      <h1>Weather App</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleChangeCity}
        />
        <button type="submit">Search</button>
      </form>
      {
        dataWeather && (
          <div>
            <h2>{dataWeather.name}</h2>
            <p><span>Temperature</span>: {dataWeather?.main?.temp}°C</p>
            <p>{dataWeather?.weather[0]?.description}</p>
            <img src={`https://openweathermap.org/img/wn/${dataWeather?.weather[0]?.icon}@2x.png`} alt="" />
          </div>
        )
      }
    </div>
  )
}
