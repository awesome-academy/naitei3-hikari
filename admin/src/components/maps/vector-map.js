import React, {Component} from 'react';

import Breadcrumb from '../common/breadcrumb.component'
import {VectorMap} from 'react-jvectormap'

class VectorMaps extends Component {
    render () {
        return (
            <div>
                {/*Container-fluid starts*/}
                <Breadcrumb title="Vector Maps" parent="Maps" />
                {/*Container-fluid Ends*/}

                {/*Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>VECTOR WORLD MAP</h5>
                                </div>
                                <div className="card-body">
                                    <div id="gmap-simple" className="map-block">
                                        <VectorMap map={'world_mill'}
                                                   backgroundColor="#ab8ce4"
                                                   ref="map"
                                                   containerStyle={{
                                                       width: '100%',
                                                       height: '100%'
                                                   }}
                                                   containerClassName="map"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>VECTOR USA MAP</h5>
                                </div>
                                <div className="card-body">
                                    <div id="gmap-simple" className="map-block">
                                        <VectorMap map={'us_aea'}
                                                   backgroundColor="#26c6da"
                                                   ref="map"
                                                   containerStyle={{
                                                       width: '100%',
                                                       height: '100%'
                                                   }}
                                                   containerClassName="map"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>VECTOR CANADA MAP</h5>
                                </div>
                                <div className="card-body">
                                    <div id="gmap-simple" className="map-block">
                                        <VectorMap map={'ca_lcc'}
                                                   backgroundColor="rgb(0, 194, 146)"
                                                   ref="map"
                                                   containerStyle={{
                                                       width: '100%',
                                                       height: '100%'
                                                   }}
                                                   containerClassName="map"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>VECTOR ASIA MAP</h5>
                                </div>
                                <div className="card-body">
                                    <div id="gmap-simple" className="map-block">
                                        <VectorMap map={'asia_mill'}
                                                   backgroundColor="rgb(64, 153, 255)"
                                                   ref="map"
                                                   containerStyle={{
                                                       width: '100%',
                                                       height: '100%'
                                                   }}
                                                   containerClassName="map"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>VECTOR EUROPE MAP</h5>
                                </div>
                                <div className="card-body">
                                    <div id="gmap-simple" className="map-block">
                                        <VectorMap map={'europe_mill'}
                                                   backgroundColor="rgb(243, 216, 0)"
                                                   ref="map"
                                                   containerStyle={{
                                                       width: '100%',
                                                       height: '100%'
                                                   }}
                                                   containerClassName="map"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>VECTOR NORTH AMERICA MAP</h5>
                                </div>
                                <div className="card-body">
                                    <div id="gmap-simple" className="map-block">
                                        <VectorMap map={'north_america_mill'}
                                                   backgroundColor="#FF5370"
                                                   ref="map"
                                                   containerStyle={{
                                                       width: '100%',
                                                       height: '100%'
                                                   }}
                                                   containerClassName="map"
                                        />
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


export default VectorMaps;