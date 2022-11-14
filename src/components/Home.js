/* eslint-disable no-unused-vars */
import React from 'react';
import './Home.css';

const Home = () => {
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather`;
  const imgUrl = `https://openweathermap.org/img/wn`; 
  const apiKey = `638ebebf7fbf92a5e76ef37754e0631b`;

  // const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&appid=638ebebf7fbf92a5e76ef37754e0631b";

  return (
    <>
    <section className="weather">
      <div className="wrapper">
        <h2 className='weather-title'>React Weather</h2>
        <div className="weather-card">
          <form className="weather-form">
            <div className="input-group">
              <input type="text" className='input-search' placeholder='enter city...' />
            </div>
          </form>
          <ul className="weather-main">
            <li className="degree">
              <span>25&deg;C</span>
            </li>
            <li className="city">
              <span>mumbai</span>
            </li>
            <li className="type">
              <figure>
                <img src="https://openweathermap.org/img/wn/50d@2x.png" alt="weather" />
              </figure>
              <span>smoke</span>
            </li>
          </ul>
          <ul className='weather-extra'>
            <li className="pressure">
              <span>pressure</span>
              <span>1008</span>
            </li>
            <li className="cloudy">
              <span>cloudy</span>
              <span>10%</span>
            </li>
            <li className="humidity">
              <span>humidity</span>
              <span>93%</span>
            </li>
            <li className="wind">
              <span>wind</span> 
              <span>11.2km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home;
