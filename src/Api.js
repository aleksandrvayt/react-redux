export function getWeatherByName(cityName) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=15391a4f19ecd29938a75e759e18b0d3`)
      .then(response => response.json())
      .catch(err => console.log(err, 'summat went wrong - name not found'));
    };
  
  export function getWeatherByCoordinates(lat, lon) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=15391a4f19ecd29938a75e759e18b0d3`)
      .then(response => response.json())
      .catch(err => console.log(err, 'summat went wrong - coordinates not found'))
  };
  