import React, { Component } from 'react';
import one from './../icons/one.png';
import two from './../icons/two.png';
import three from './../icons/three.png';
import four from './../icons/four.png';
import nine from './../icons/nine.png';
import eleven from './../icons/eleven.png';
import thirteen from './../icons/thirteen.png';
import fifty from './../icons/fifty.png';

class WeatherIcon extends Component {
  iconSelector = (id) => {
    switch(id){
      case 2:
        return (
          <img src={two} alt="weather icon"/>
        )
      case 3:
        return (
          <img src={three} alt="weather icon"/>
        )
      case 4:
        return (
          <img src={four} alt="weather icon4"/>
        )
      case 9:
        return (
          <img src={nine} alt="weather icon"/>
        )
      case 11:
        return (
          <img src={eleven} alt="weather icon"/>
        )
      case 13:
        return (
          <img src={thirteen} alt="weather icon"/>
        )
      case 50:
        return (
          <img src={fifty} alt="weather icon"/>
        )
      default: 
        return (
          <img src={one} alt="weather icon"/>
        )
    };
  };

  render() {
    return (
      <div>
        {this.iconSelector(this.props.iconId)}    
      </div>
    );
  };
};

export default WeatherIcon
