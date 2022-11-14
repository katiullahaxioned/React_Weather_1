/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Home.css";
import client from "../clientAxios";

const Home = () => {
  const [result, setResult] = useState();
  const [fetchError, setFetchError] = useState('');

  const imgUrl = `https://openweathermap.org/img/wn`;
  const apiKey = `638ebebf7fbf92a5e76ef37754e0631b`;

  const fetchWeather = async (city) => {
    try {
      const res = await client.get(`?q=${city}&units=metric&appid=${apiKey}`);
      if(res.status === 200) {
        setResult(res.data);
      }
    } catch (error) {
      if(error.request.status === 404) {
        setFetchError(error.response.data.message)
      } else if(error.request.status !== 200) {
        setFetchError(error.message)
      }
    }
  };

  useEffect(() => {
    fetchWeather('thane');
  }, [])

  const searchWeather = (e) => {
    e.preventDefault();
    const inputValue = e.target.search.value.trim();
    fetchWeather(inputValue);
    e.target.search.value = '';
    setFetchError('');
  };

  return (
    <>
      <section className="weather">
        <div className="wrapper" style={{backgroundImage: `url(./images/${result?.weather[0].main}.jpg)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
          <h2 className="weather-title">React Weather</h2>
          <div className="weather-card">
            <form className="weather-form" onSubmit={(e) => searchWeather(e)}>
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  className="input-search"
                  placeholder="enter city..."
                  autoComplete="off"
                />
              </div>
            </form>
            { result && fetchError === '' ? (
              <>
                <ul className="weather-main">
                  <li className="degree">
                    <span>{Math.round(result?.main.temp)}&deg;C</span>
                  </li>
                  <li className="city">
                    <span>{result?.name}</span>
                  </li>
                  <li className="type">
                    <figure>
                      <img
                        src={`https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`}
                        alt={result?.name}
                      />
                    </figure>
                    <span>{result?.weather[0].main}</span>
                  </li>
                </ul>
                <ul className="weather-extra">
                  <li className="pressure">
                    <span>pressure</span>
                    <span>{result?.main.pressure}</span>
                  </li>
                  <li className="cloudy">
                    <span>cloudy</span>
                    <span>{result?.clouds.all}%</span>
                  </li>
                  <li className="humidity">
                    <span>humidity</span>
                    <span>{result?.main.humidity}%</span>
                  </li>
                  <li className="wind">
                    <span>wind</span>
                    <span>{result?.wind.speed}km/h</span>
                  </li>
                </ul>
              </>
            ) : <h2>{fetchError}</h2> }
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;