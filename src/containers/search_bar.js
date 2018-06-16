import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'; // action creator

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        // its overwriting the onInputChange method, binding the "this" reference from the component
        // so the method can have access to it(this)
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
        // console.log(event.target.value);
    }

    onFormSubmit(event) {
        event.preventDefault();

        //calling the action creator, which contains a function the calls the api
        // passing the `term` as argument, which is the value of the input, and is supposed to be a city
        this.props.fetchWeather(this.state.term);
        //cleaning the search input after search is submited
        this.setState({ term: '' });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    // if pass a callback like this "onChange" you will need to "bind the reference" (as above)
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// the first argument of the connect function is the state and the function should always be on second
// thats why the first arg is null and the second not, I just need to bind/use the function right now
export default connect(null, mapDispatchToProps)(SearchBar);