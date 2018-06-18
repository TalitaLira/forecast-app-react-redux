import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render() {
        return <div ref="map"/> // gives a reference for anithing that has map as a reference, so anywhere in the component when you want to use the map, you refer as "this.refs.map"
    }

}

export default GoogleMap;