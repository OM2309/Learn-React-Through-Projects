import './WeatherApp.css';
import search_icon from '../Assets/search.png';
// import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png';
// import drizzle_icon from '../Assets/drizzle.png'
import humidity_icon from '../Assets/humidity.png'
// import rain_icon from '../Assets/rain.png'
// import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'

const WeatherApp = () => {

let api_key = "1fbb33dcce5b6541d14dcd5591114fd4";
const search = () => {
    const element = document.getElementsByClassName('cityInput')
    if(element[0] === ""){
        return 0;
    }
    else{

    }
}

  return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className='cityInput' placeholder='Search'/>
                <div className="search-icon" onClick={()=>search()} >
                    <img src={search_icon} />
                </div>
            </div>
            <div className="weather-image">
                <img src= {cloud_icon} />
            </div>
            <div className="weather-temp">24°c</div>
            <div className="weather-location">London</div>
            <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                 <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                 </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                 <div className="data">
                    <div className="humidity-percent">18km/h</div>
                    <div className="text">Wind Speed</div>
                 </div>
            </div>
            </div>
        
        </div>
  )
};

export default WeatherApp;
