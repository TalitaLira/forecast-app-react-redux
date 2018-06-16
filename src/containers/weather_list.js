import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
    // cityData would be each city with a list of informations returned from the array.map interection (this.props.weather.map)
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
         console.log(temps);
        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="orange" />
                </td>
            </tr>
        );
    }


    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

//function mapStateToProps(state) {
    // it is 'state.weather', because in CombineReducers, the WeatherReducer was assigned to 'weather'
 //   return { weather: state.weather };
//}
// another way to do it using es6 sintax is:
// (class 61)
function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);