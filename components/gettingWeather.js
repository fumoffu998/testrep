import React from "react";

const API_KEY = "51fa392df4c6e8e1cb130e498e07c08b";

class gettingWeather extends React.Component {
  render() {
    return (
      gettingWeather = async (e) => {
        e.preventDefault();
        const api_url = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Ufa&appid=${API_KEY}`
        );
        const data = api_url.json();
        console.log(data);
      }
    );
  }
}

export default gettingWeather;




