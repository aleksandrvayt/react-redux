import React, { Component } from 'react';
import WeatherIcon from './WeatherIcon.js';
import { connect } from 'react-redux';
import { deleteCity } from './../actions/cityActions';


class OneCity extends Component {
  render() {
    return(
      <div className="one-city-div">

        {this.props.cityShown && this.props.geolocalised === true ? (
              <div className="city-shown">
                Город уже добавлен в важные
              </div>
            ) : (null)}

        {this.props.loading && this.props.cities.length !== 0 ? (
          <div className="message"><h1>Загрузка...</h1></div>
          ) : (null)}

        {this.props.cities.length === 0 ? (
        <div className="message">На данный момент сохраненных городов нет<br/>добавьте интересующий город</div>
        ) : ( this.props.cities.map(oneCity => {
          let cappedCity = oneCity.name.charAt(0).toUpperCase() + oneCity.name.slice(1)
          return(
            <div className="city-card" key={oneCity.id}>

              <button className="remove-button" onClick={() => {this.props.deleteCity(oneCity.id)}}>&times;</button>
             
              <div>
                <p className="city-name">{cappedCity}, {oneCity.country}</p>
                <p>Температура: {Math.floor(oneCity.temp - 273.15)}°C</p>
                <p>Влажность: {oneCity.hum}%</p>
                <p>Давление: {oneCity.press} мм рт.ст.</p>
                <p>Ощущается: {Math.ceil(oneCity.feel - 273.15)}°C</p>
              </div>
              
              <div>
                <WeatherIcon iconId={oneCity.iconId} />
              </div>

            </div>);
        })
      )}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
    loading: state.loading,
    cityShown : state.cityShown,
    geolocalised: state.geolocalised
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCity: (id) => {dispatch(deleteCity(id))},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OneCity);

