import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polygon, Polyline} from 'google-maps-react';

import Breadcrumb from '../common/breadcrumb.component'


class GoogleMap extends Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };


    render () {

        const triangleCoords = [
            {lat: -12.04, lng: -77.03},
            {lat: -12.04, lng: -77.03},
            {lat: -12.05, lng: -77.02},
            {lat: -12.04, lng: -77.02}
        ];

        return (
            <div>
                {/*Container-fluid starts*/}
                <Breadcrumb title="Google Maps" parent="Maps" />
                {/*Container-fluid Ends*/}

                {/*Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Basic Demo</h5>
                                </div>
                                <div className="card-body">
                                    <div id="gmap-simple" className="map-block">
                                    <Map google={this.props.google} zoom={14}>

                                        <InfoWindow onClose={this.onInfoWindowClose}>
                                            <div>
                                            </div>
                                        </InfoWindow>
                                    </Map>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Marker Map</h5>
                                </div>
                                <div className="card-body">
                                    <div id="gmap-simple" className="map-block">
                                    <Map google={this.props.google} onClick={this.onMapClicked} zoom={14}>
                                        <Marker onClick={this.onMarkerClick}
                                                name={'Current location'} />
                                        <InfoWindow
                                            marker={this.state.activeMarker}
                                            visible={this.state.showingInfoWindow}>
                                            <div>
                                                <h1>{this.state.selectedPlace.name}</h1>
                                            </div>
                                        </InfoWindow>
                                    </Map>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>POLYGONS</h5>
                                </div>
                                <div className="card-body">
                                    <div id="gmap-simple" className="map-block">
                                        <Map google={this.props.google}
                                             style={{width: '100%', height: '100%', position: 'relative'}}
                                             className={'map'}
                                             zoom={14}>
                                            <Polygon
                                                paths={triangleCoords}
                                                strokeColor="#0000"
                                                strokeOpacity={0.8}
                                                strokeWeight={2}
                                                fillColor="#0000"
                                                fillOpacity={0.35} />
                                        </Map>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Polyline</h5>
                                </div>
                                <div className="card-body">
                                    <div id="gmap-simple" className="map-block">
                                        <Map google={this.props.google}
                                             style={{width: '100%', height: '100%', position: 'relative'}}
                                             className={'map'}
                                             zoom={14}>
                                            <Polyline
                                                paths={triangleCoords}
                                                strokeColor="#0000FF"
                                                strokeOpacity={0.8}
                                                strokeWeight={2} />
                                        </Map>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: ("ENTER_YOUR_KEY")
})(GoogleMap)