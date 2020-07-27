import React, {Component} from 'react';

// import Custom Componenets
import Breadcrumb from '../common/breadcrumb.component';
import IconMarkUp from './icon-markup';

class Samplepage extends Component {

    state = { iTag: null }

    getItag = (tag) => {
        this.setState({
            iTag: tag
        })

    }
    render() {
        return (
            <div>
                <Breadcrumb title="Themify Icon" parent="Icons"/>
                {/*Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Arrows &amp; Direction Icons</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-arrow-up"></i> icon-arrow-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-arrow-right"></i> icon-arrow-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-arrow-left"></i> icon-arrow-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-arrow-down"></i> icon-arrow-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-arrows-vertical"></i> icon-arrows-vertical
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-arrows-horizontal"></i> icon-arrows-horizontal
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-angle-up"></i> icon-angle-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-angle-right"></i> icon-angle-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-angle-left"></i> icon-angle-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-angle-down"></i> icon-angle-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-angle-double-up"></i> icon-angle-double-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-angle-double-right"></i> icon-angle-double-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-angle-double-left"></i> icon-angle-double-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-angle-double-down"></i> icon-angle-double-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-move"></i> icon-move
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-fullscreen"></i> icon-fullscreen
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-arrow-top-right"></i> icon-arrow-top-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-arrow-top-left"></i> icon-arrow-top-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-arrow-circle-up"></i> icon-arrow-circle-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-arrow-circle-right"></i> icon-arrow-circle-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-arrow-circle-left"></i> icon-arrow-circle-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-arrow-circle-down"></i> icon-arrow-circle-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-arrows-corner"></i> icon-arrows-corner
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-split-v"></i> icon-split-v
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-split-v-alt"></i> icon-split-v-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-split-h"></i> icon-split-h
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-hand-point-up"></i> icon-hand-point-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-hand-point-right"></i> icon-hand-point-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-hand-point-left"></i> icon-hand-point-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-hand-point-down"></i> icon-hand-point-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-back-right"></i> icon-back-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-back-left"></i> icon-back-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-exchange-vertical"></i> icon-exchange-vertical
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Web App Icons</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-wand"></i> icon-wand
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-save"></i> icon-save
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-save-alt"></i> icon-save-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-direction"></i> icon-direction
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-direction-alt"></i> icon-direction-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-user"></i> icon-user
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-link"></i> icon-link
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-unlink"></i> icon-unlink
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-trash"></i> icon-trash
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-target"></i> icon-target
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-tag"></i> icon-tag
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-desktop"></i> icon-desktop
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-tablet"></i> icon-tablet
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-mobile"></i> icon-mobile
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-email"></i> icon-email
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-star"></i> icon-star
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-spray"></i> icon-spray
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-signal"></i> icon-signal
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-shopping-cart"></i> icon-shopping-cart
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-shopping-cart-full"></i> icon-shopping-cart-full
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-settings"></i> icon-settings
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-search"></i> icon-search
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-zoom-in"></i> icon-zoom-in
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-zoom-out"></i> icon-zoom-out
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-cut"></i> icon-cut
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-ruler"></i> icon-ruler
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-ruler-alt-2"></i> icon-ruler-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-ruler-pencil"></i> icon-ruler-pencil
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-ruler-alt"></i> icon-ruler-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-bookmark"></i> icon-bookmark
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-bookmark-alt"></i> icon-bookmark-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-reload"></i> icon-reload
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-plus"></i> icon-plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-minus"></i> icon-minus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-close"></i> icon-close
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-pin"></i> icon-pin
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-pencil"></i> icon-pencil
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-pencil-alt"></i> icon-pencil-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-paint-roller"></i> icon-paint-roller
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-paint-bucket"></i> icon-paint-bucket
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-na"></i> icon-na
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-medall"></i> icon-medall
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-medall-alt"></i> icon-medall-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-marker"></i> icon-marker
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-marker-alt"></i> icon-marker-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-lock"></i> icon-lock
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-unlock"></i> icon-unlock
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-location-arrow"></i> icon-location-arrow
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-layout"></i> icon-layout
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-layers"></i> icon-layers
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-layers-alt"></i> icon-layers-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-key"></i> icon-key
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-image"></i> icon-image
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-heart"></i> icon-heart
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-heart-broken"></i> icon-heart-broken
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-hand-stop"></i> icon-hand-stop
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-hand-open"></i> icon-hand-open
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-hand-drag"></i> icon-hand-drag
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-flag"></i> icon-flag
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-flag-alt"></i> icon-flag-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-flag-alt-2"></i> icon-flag-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-eye"></i> icon-eye
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-import"></i> icon-import
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-export"></i> icon-export
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-cup"></i> icon-cup
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-crown"></i> icon-crown
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-comments"></i> icon-comments
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-comment"></i> icon-comment
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-comment-alt"></i> icon-comment-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-thought"></i> icon-thought
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-clip"></i> icon-clip
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-check"></i> icon-check
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-check-box"></i> icon-check-box
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-camera"></i> icon-camera
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-announcement"></i> icon-announcement
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-brush"></i> icon-brush
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-brush-alt"></i> icon-brush-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-palette"></i> icon-palette
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-briefcase"></i> icon-briefcase
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-bolt"></i> icon-bolt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-bolt-alt"></i> icon-bolt-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-blackboard"></i> icon-blackboard
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-bag"></i> icon-bag
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-world"></i> icon-world
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-wheelchair"></i> icon-wheelchair
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-car"></i> icon-car
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-truck"></i> icon-truck
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-timer"></i> icon-timer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-ticket"></i> icon-ticket
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-thumb-up"></i> icon-thumb-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-thumb-down"></i> icon-thumb-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-stats-up"></i> icon-stats-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-stats-down"></i> icon-stats-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-shine"></i> icon-shine
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-shift-right"></i> icon-shift-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-shift-left"></i> icon-shift-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-shift-right-alt"></i> icon-shift-right-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-shift-left-alt"></i> icon-shift-left-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-shield"></i> icon-shield
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-notepad"></i> icon-notepad
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-server"></i> icon-server
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-pulse"></i> icon-pulse
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-printer"></i> icon-printer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-power-off"></i> icon-power-off
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-plug"></i> icon-plug
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-pie-chart"></i> icon-pie-chart
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-panel"></i> icon-panel
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-package"></i> icon-package
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-music"></i> icon-music
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-music-alt"></i> icon-music-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-mouse"></i> icon-mouse
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-mouse-alt"></i> icon-mouse-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-money"></i> icon-money
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-microphone"></i> icon-microphone
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-menu"></i> icon-menu
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-menu-alt"></i> icon-menu-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-map"></i> icon-map
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-map-alt"></i> icon-map-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-location-pin"></i> icon-location-pin
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-light-bulb"></i> icon-light-bulb
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-info"></i> icon-info
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-infinite"></i> icon-infinite
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-id-badge"></i> icon-id-badge
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-hummer"></i> icon-hummer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-home"></i> icon-home
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-help"></i> icon-help
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-headphone"></i> icon-headphone
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-harddrives"></i> icon-harddrives
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-harddrive"></i> icon-harddrive
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-gift"></i> icon-gift
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-game"></i> icon-game
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-filter"></i> icon-filter
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-files"></i> icon-files
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-file"></i> icon-file
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-zip"></i> icon-zip
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-folder"></i> icon-folder
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-envelope"></i> icon-envelope
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-dashboard"></i> icon-dashboard
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-cloud"></i> icon-cloud
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-cloud-up"></i> icon-cloud-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-cloud-down"></i> icon-cloud-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-clipboard"></i> icon-clipboard
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-calendar"></i> icon-calendar
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-book"></i> icon-book
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-bell"></i> icon-bell
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-basketball"></i> icon-basketball
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-bar-chart"></i> icon-bar-chart
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-bar-chart-alt"></i> icon-bar-chart-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-archive"></i> icon-archive
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-anchor"></i> icon-anchor
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-alert"></i> icon-alert
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-alarm-clock"></i> icon-alarm-clock
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-agenda"></i> icon-agenda
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-write"></i> icon-write
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-wallet"></i> icon-wallet
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-video-clapper"></i> icon-video-clapper
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-video-camera"></i> icon-video-camera
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-vector"></i> icon-vector
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-support"></i> icon-support
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-stamp"></i> icon-stamp
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-slice"></i> icon-slice
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-shortcode"></i> icon-shortcode
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-receipt"></i> icon-receipt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-pin2"></i> icon-pin2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-pin-alt"></i> icon-pin-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-pencil-alt2"></i> icon-pencil-alt2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-eraser"></i> icon-eraser
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-more"></i> icon-more
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-more-alt"></i> icon-more-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-microphone-alt"></i> icon-microphone-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-magnet"></i> icon-magnet
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-line-double"></i> icon-line-double
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-line-dotted"></i> icon-line-dotted
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-line-dashed"></i> icon-line-dashed
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-ink-pen"></i> icon-ink-pen
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-info-alt"></i> icon-info-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-help-alt"></i> icon-help-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-headphone-alt"></i> icon-headphone-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-gallery"></i> icon-gallery
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-face-smile"></i> icon-face-smile
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-face-sad"></i> icon-face-sad
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-credit-card"></i> icon-credit-card
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-comments-smiley"></i> icon-comments-smiley
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-time"></i> icon-time
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-share"></i> icon-share
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-share-alt"></i> icon-share-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-rocket"></i> icon-rocket
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-new-window"></i> icon-new-window
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-rss"></i> icon-rss
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-rss-alt"></i> icon-rss-alt
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Control Icons</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-control-stop"></i> icon-control-stop
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-control-shuffle"></i> icon-control-shuffle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-control-play"></i> icon-control-play
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-control-pause"></i> icon-control-pause
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-control-forward"></i> icon-control-forward
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-control-backward"></i> icon-control-backward
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-volume"></i> icon-volume
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-control-skip-forward"></i> icon-control-skip-forward
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-control-skip-backward"></i> icon-control-skip-backward
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-control-record"></i> icon-control-record
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-control-eject"></i> icon-control-eject
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Text Editor</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-paragraph"></i> icon-paragraph
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-uppercase"></i> icon-uppercase
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-underline"></i> icon-underline
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-text"></i> icon-text
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-Italic"></i> icon-Italic
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-smallcap"></i> icon-smallcap
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-list"></i> icon-list
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-list-ol"></i> icon-list-ol
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-align-right"></i> icon-align-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-align-left"></i> icon-align-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-align-justify"></i> icon-align-justify
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-align-center"></i> icon-align-center
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-quote-right"></i> icon-quote-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-quote-left"></i> icon-quote-left
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Brand Icons</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-flickr"></i> icon-flickr
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-flickr-alt"></i> icon-flickr-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-instagram"></i> icon-instagram
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-google"></i> icon-google
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-github"></i> icon-github
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-facebook"></i> icon-facebook
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-dropbox"></i> icon-dropbox
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-dropbox-alt"></i> icon-dropbox-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-dribbble"></i> icon-dribbble
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-apple"></i> icon-apple
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-android"></i> icon-android
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-yahoo"></i> icon-yahoo
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-trello"></i> icon-trello
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-stack-overflow"></i> icon-stack-overflow
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-soundcloud"></i> icon-soundcloud
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-sharethis"></i> icon-sharethis
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-sharethis-alt"></i> icon-sharethis-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-reddit"></i> icon-reddit
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-microsoft"></i> icon-microsoft
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-microsoft-alt"></i> icon-microsoft-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-linux"></i> icon-linux
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-jsfiddle"></i> icon-jsfiddle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-joomla"></i> icon-joomla
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-html5"></i> icon-html5
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-css3"></i> icon-css3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-drupal"></i> icon-drupal
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-wordpress"></i> icon-wordpress
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-tumblr"></i> icon-tumblr
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-tumblr-alt"></i> icon-tumblr-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-skype"></i> icon-skype
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-youtube"></i> icon-youtube
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-vimeo"></i> icon-vimeo
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-vimeo-alt"></i> icon-vimeo-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-twitter"></i> icon-twitter
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-twitter-alt"></i> icon-twitter-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-linkedin"></i> icon-linkedin
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-pinterest"></i> icon-pinterest
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-pinterest-alt"></i> icon-pinterest-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-themify-logo"></i> icon-themify-logo
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-themify-favicon"></i> icon-themify-favicon
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icon-themify-favicon-alt"></i> icon-themify-favicon-alt
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Container-fluid Ends*/}

                <IconMarkUp itag={this.state.iTag} />
            </div>
        )
    }
}


export default Samplepage;