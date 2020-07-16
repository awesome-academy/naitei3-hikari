import React, {Component} from 'react';

// import Custom Componenets
import Breadcrumb from '../common/breadcrumb.component';
import IconMarkUp from './icon-markup';

class IcoIcon extends Component {

    state = { iTag: null }

    getItag = (tag) => {
        this.setState({
            iTag: tag
        })

    }
    render() {
        return (
            <div>
                <Breadcrumb title="ico-icon" parent="Icons"/>
                {/*Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Abstract</h5>
                                    <span>New</span>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <i className="icofont icofont-angry-monster"></i>angry-monster
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bathtub"></i>bathtub
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bird-wings"></i>bird-wings
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bow"></i>bow
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brain-alt"></i>brain-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-butterfly-alt"></i>butterfly-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-castle"></i>castle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-circuit"></i>circuit
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-dart"></i>dart
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-dice-alt"></i>dice-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-disability-race"></i>disability-race
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-diving-goggle"></i>diving-goggle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-fire-alt"></i>fire-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-flame-torch"></i>flame-torch
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-flora"></i>flora
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-flora-flower"></i>flora-flower
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-gift-box"></i>gift-box
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-halloween-pumpkin"></i>halloween-pumpkin
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hand-power"></i>hand-power
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hand-thunder"></i>hand-thunder
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-king-crown"></i>king-crown
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-king-monster"></i>king-monster
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-love"></i>love
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-magician-hat"></i>magician-hat
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-native-american"></i>native-american
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-open-eye"></i>open-eye
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-owl-look"></i>owl-look
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-phoenix"></i>phoenix
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-queen-crown"></i>queen-crown
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-robot-face"></i>robot-face
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sand-clock"></i>sand-clock
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-shield-alt"></i>shield-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ship-wheel"></i>ship-wheel
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-skull-danger"></i>skull-danger
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-skull-face"></i>skull-face
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-snail"></i>snail
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-snow-alt"></i>snow-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-snow-flake"></i>snow-flake
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-snowmobile"></i>snowmobile
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-space-shuttle"></i>space-shuttle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-star-shape"></i>star-shape
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-swirl"></i>swirl
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tattoo-wing"></i>tattoo-wing
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-throne"></i>throne
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-touch"></i>touch
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tree-alt"></i>tree-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-triangle"></i>triangle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-unity-hand"></i>unity-hand
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-weed"></i>weed
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-woman-bird"></i>woman-bird
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Animal</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-bat"></i>animal-bat
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-bear"></i>animal-bear
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-bear-tracks"></i>animal-bear-tracks
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-bird"></i>animal-bird
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-bird-alt"></i>animal-bird-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-bone"></i>animal-bone
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-bull"></i>animal-bull
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-camel"></i>animal-camel
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-camel-alt"></i>animal-camel-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-camel-head"></i>animal-camel-head
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-cat"></i>animal-cat
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-cat-alt-1"></i>animal-cat-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-cat-alt-2"></i>animal-cat-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-cat-alt-3"></i>animal-cat-alt-3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-cat-alt-4"></i>animal-cat-alt-4
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-cat-with-dog"></i>animal-cat-with-dog
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-cow"></i>animal-cow
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-cow-head"></i>animal-cow-head
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-crab"></i>animal-crab
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-crocodile"></i>animal-crocodile
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-deer-head"></i>animal-deer-head
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-dog"></i>animal-dog
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-dog-alt"></i>animal-dog-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-dog-barking"></i>animal-dog-barking
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-dolphin"></i>animal-dolphin
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-duck-tracks"></i>animal-duck-tracks
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-eagle-head"></i>animal-eagle-head
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-eaten-fish"></i>animal-eaten-fish
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-elephant"></i>animal-elephant
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-elephant-alt"></i>animal-elephant-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-elephant-head"></i>animal-elephant-head
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-elephant-head-alt"></i>animal-elephant-head-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-elk"></i>animal-elk
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-fish"></i>animal-fish
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-fish-alt-1"></i>animal-fish-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-fish-alt-2"></i>animal-fish-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-fish-alt-3"></i>animal-fish-alt-3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-fish-alt-4"></i>animal-fish-alt-4
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-fox"></i>animal-fox
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-fox-alt"></i>animal-fox-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-frog"></i>animal-frog
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-frog-tracks"></i>animal-frog-tracks
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-froggy"></i>animal-froggy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-giraffe"></i>animal-giraffe
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-giraffe-alt"></i>animal-giraffe-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-goat-head"></i>animal-goat-head
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-goat-head-alt-1"></i>animal-goat-head-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-goat-head-alt-2"></i>animal-goat-head-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-gorilla"></i>animal-gorilla
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-hen-tracks"></i>animal-hen-tracks
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-horse-head"></i>animal-horse-head
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-horse-head-alt-1"></i>animal-horse-head-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-horse-head-alt-2"></i>animal-horse-head-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-horse-tracks"></i>animal-horse-tracks
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-jellyfish"></i>animal-jellyfish
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-kangaroo"></i>animal-kangaroo
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-lemur"></i>animal-lemur
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-lion"></i>animal-lion
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-lion-alt"></i>animal-lion-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-lion-head"></i>animal-lion-head
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-lion-head-alt"></i>animal-lion-head-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-monkey"></i>animal-monkey
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-monkey-alt-1"></i>animal-monkey-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-monkey-alt-2"></i>animal-monkey-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-monkey-alt-3"></i>animal-monkey-alt-3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-octopus"></i>animal-octopus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-octopus-alt"></i>animal-octopus-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-owl"></i>animal-owl
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-panda"></i>animal-panda
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-panda-alt"></i>animal-panda-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-panther"></i>animal-panther
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-parrot"></i>animal-parrot
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-parrot-lip"></i>animal-parrot-lip
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-paw"></i>animal-paw
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-pelican"></i>animal-pelican
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-penguin"></i>animal-penguin
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-pig"></i>animal-pig
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-pig-alt"></i>animal-pig-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-pigeon"></i>animal-pigeon
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-pigeon-alt"></i>animal-pigeon-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-pigeons"></i>animal-pigeons
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-rabbit-running"></i>animal-rabbit-running
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-rat-alt"></i>animal-rat-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-rhino"></i>animal-rhino
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-rhino-head"></i>animal-rhino-head
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-rooster"></i>animal-rooster
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-seahorse"></i>animal-seahorse
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-seal"></i>animal-seal
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-shrimp"></i>animal-shrimp
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-snail"></i>animal-snail
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-snail-alt-1"></i>animal-snail-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-snail-alt-2"></i>animal-snail-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-snake"></i>animal-snake
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-squid"></i>animal-squid
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-squirrel"></i>animal-squirrel
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-tiger"></i>animal-tiger
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-tiger-alt"></i>animal-tiger-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-turtle"></i>animal-turtle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-whale"></i>animal-whale
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-woodpecker"></i>animal-woodpecker
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-animal-zebra"></i>animal-zebra
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Brand</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-acer"></i>brand-acer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-adidas"></i>brand-adidas
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-adobe"></i>brand-adobe
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-air-new-zealand"></i>brand-air-new-zealand
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-airbnb"></i>brand-airbnb
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-aircell"></i>brand-aircell
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-airtel"></i>brand-airtel
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-alcatel"></i>brand-alcatel
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-alibaba"></i>brand-alibaba
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-aliexpress"></i>brand-aliexpress
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-alipay"></i>brand-alipay
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-amazon"></i>brand-amazon
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-amd"></i>brand-amd
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-american-airlines"></i>brand-american-airlines
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-android"></i>brand-android
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-android-robot"></i>brand-android-robot
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-aol"></i>brand-aol
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-apple"></i>brand-apple
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-appstore"></i>brand-appstore
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-asus"></i>brand-asus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-ati"></i>brand-ati
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-att"></i>brand-att
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-audi"></i>brand-audi
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-axiata"></i>brand-axiata
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-bada"></i>brand-bada
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-bbc"></i>brand-bbc
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-bing"></i>brand-bing
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-blackberry"></i>brand-blackberry
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-bmw"></i>brand-bmw
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-box"></i>brand-box
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-burger-king"></i>brand-burger-king
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-business-insider"></i>brand-business-insider
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-buzzfeed"></i>brand-buzzfeed
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-cannon"></i>brand-cannon
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-casio"></i>brand-casio
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-china-mobile"></i>brand-china-mobile
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-china-telecom"></i>brand-china-telecom
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-china-unicom"></i>brand-china-unicom
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-cisco"></i>brand-cisco
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-citibank"></i>brand-citibank
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-cnet"></i>brand-cnet
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-cnn"></i>brand-cnn
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-cocal-cola"></i>brand-cocal-cola
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-compaq"></i>brand-compaq
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-copy"></i>brand-copy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-debian"></i>brand-debian
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-delicious"></i>brand-delicious
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-dell"></i>brand-dell
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-designbump"></i>brand-designbump
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-designfloat"></i>brand-designfloat
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-disney"></i>brand-disney
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-dodge"></i>brand-dodge
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-dove"></i>brand-dove
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-ebay"></i>brand-ebay
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-eleven"></i>brand-eleven
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-emirates"></i>brand-emirates
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-espn"></i>brand-espn
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-etihad-airways"></i>brand-etihad-airways
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-etisalat"></i>brand-etisalat
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-etsy"></i>brand-etsy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-facebook"></i>brand-facebook
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-fastrack"></i>brand-fastrack
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-fedex"></i>brand-fedex
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-ferrari"></i>brand-ferrari
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-fitbit"></i>brand-fitbit
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-flikr"></i>brand-flikr
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-forbes"></i>brand-forbes
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-foursquare"></i>brand-foursquare
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-fox"></i>brand-fox
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-foxconn"></i>brand-foxconn
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-fujitsu"></i>brand-fujitsu
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-general-electric"></i>brand-general-electric
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-gillette"></i>brand-gillette
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-gizmodo"></i>brand-gizmodo
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-gnome"></i>brand-gnome
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-google"></i>brand-google
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-gopro"></i>brand-gopro
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-gucci"></i>brand-gucci
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-hallmark"></i>brand-hallmark
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-hi5"></i>brand-hi5
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-honda"></i>brand-honda
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-hp"></i>brand-hp
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-hsbc"></i>brand-hsbc
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-htc"></i>brand-htc
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-huawei"></i>brand-huawei
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-hulu"></i>brand-hulu
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-hyundai"></i>brand-hyundai
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-ibm"></i>brand-ibm
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-icofont"></i>brand-icofont
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-icq"></i>brand-icq
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-ikea"></i>brand-ikea
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-imdb"></i>brand-imdb
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-indiegogo"></i>brand-indiegogo
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-intel"></i>brand-intel
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-ipair"></i>brand-ipair
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-jaguar"></i>brand-jaguar
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-java"></i>brand-java
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-joomla"></i>brand-joomla
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-joomshaper"></i>brand-joomshaper
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-kickstarter"></i>brand-kickstarter
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-kik"></i>brand-kik
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-lastfm"></i>brand-lastfm
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-lego"></i>brand-lego
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-lenovo"></i>brand-lenovo
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-levis"></i>brand-levis
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-lexus"></i>brand-lexus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-lg"></i>brand-lg
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-life-hacker"></i>brand-life-hacker
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-line-messenger"></i>brand-line-messenger
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-linkedin"></i>brand-linkedin
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-linux"></i>brand-linux
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-linux-mint"></i>brand-linux-mint
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-lionix"></i>brand-lionix
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-live-messenger"></i>brand-live-messenger
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-loreal"></i>brand-loreal
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-louis-vuitton"></i>brand-louis-vuitton
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-mac-os"></i>brand-mac-os
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-marvel-app"></i>brand-marvel-app
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-mashable"></i>brand-mashable
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-mazda"></i>brand-mazda
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-mcdonals"></i>brand-mcdonals
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-mercedes"></i>brand-mercedes
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-micromax"></i>brand-micromax
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-microsoft"></i>brand-microsoft
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-mobileme"></i>brand-mobileme
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-mobily"></i>brand-mobily
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-motorola"></i>brand-motorola
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-msi"></i>brand-msi
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-mts"></i>brand-mts
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-myspace"></i>brand-myspace
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-mytv"></i>brand-mytv
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-nasa"></i>brand-nasa
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-natgeo"></i>brand-natgeo
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-nbc"></i>brand-nbc
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-nescafe"></i>brand-nescafe
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-nestle"></i>brand-nestle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-netflix"></i>brand-netflix
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-nexus"></i>brand-nexus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-nike"></i>brand-nike
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-nokia"></i>brand-nokia
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-nvidia"></i>brand-nvidia
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-omega"></i>brand-omega
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-opensuse"></i>brand-opensuse
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-oracle"></i>brand-oracle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-panasonic"></i>brand-panasonic
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-paypal"></i>brand-paypal
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-pepsi"></i>brand-pepsi
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-philips"></i>brand-philips
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-pizza-hut"></i>brand-pizza-hut
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-playstation"></i>brand-playstation
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-puma"></i>brand-puma
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-qatar-air"></i>brand-qatar-air
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-qvc"></i>brand-qvc
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-readernaut"></i>brand-readernaut
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-redbull"></i>brand-redbull
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-reebok"></i>brand-reebok
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-reuters"></i>brand-reuters
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-samsung"></i>brand-samsung
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-sap"></i>brand-sap
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-saudia-airlines"></i>brand-saudia-airlines
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-scribd"></i>brand-scribd
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-shell"></i>brand-shell
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-siemens"></i>brand-siemens
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-sk-telecom"></i>brand-sk-telecom
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-slideshare"></i>brand-slideshare
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-smashing-magazine"></i>brand-smashing-magazine
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-snapchat"></i>brand-snapchat
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-sony"></i>brand-sony
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-sony-ericsson"></i>brand-sony-ericsson
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-soundcloud"></i>brand-soundcloud
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-sprint"></i>brand-sprint
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-squidoo"></i>brand-squidoo
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-starbucks"></i>brand-starbucks
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-stc"></i>brand-stc
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-steam"></i>brand-steam
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-suzuki"></i>brand-suzuki
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-symbian"></i>brand-symbian
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-t-mobile"></i>brand-t-mobile
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-tango"></i>brand-tango
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-target"></i>brand-target
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-tata-indicom"></i>brand-tata-indicom
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-techcrunch"></i>brand-techcrunch
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-telenor"></i>brand-telenor
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-teliasonera"></i>brand-teliasonera
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-tesla"></i>brand-tesla
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-the-verge"></i>brand-the-verge
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-thenextweb"></i>brand-thenextweb
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-toshiba"></i>brand-toshiba
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-toyota"></i>brand-toyota
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-tribenet"></i>brand-tribenet
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-ubuntu"></i>brand-ubuntu
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-unilever"></i>brand-unilever
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-vaio"></i>brand-vaio
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-verizon"></i>brand-verizon
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-viber"></i>brand-viber
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-vodafone"></i>brand-vodafone
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-volkswagen"></i>brand-volkswagen
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-walmart"></i>brand-walmart
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-warnerbros"></i>brand-warnerbros
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-whatsapp"></i>brand-whatsapp
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-wikipedia"></i>brand-wikipedia
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-windows"></i>brand-windows
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-wire"></i>brand-wire
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-wordpress"></i>brand-wordpress
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-xiaomi"></i>brand-xiaomi
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-yahoobuzz"></i>brand-yahoobuzz
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-yamaha"></i>brand-yamaha
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-youtube"></i>brand-youtube
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-zain"></i>brand-zain
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-envato"></i>social-envato
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Business</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bank-alt"></i>bank-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-barcode"></i>barcode
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-basket"></i>basket
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bill-alt"></i>bill-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-billboard"></i>billboard
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-briefcase-alt-1"></i>briefcase-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-briefcase-alt-2"></i>briefcase-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-building-alt"></i>building-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-businessman"></i>businessman
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-businesswoman"></i>businesswoman
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cart-alt"></i>cart-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-chair"></i>chair
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-clip"></i>clip
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-coins"></i>coins
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-company"></i>company
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-contact-add"></i>contact-add
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-deal"></i>deal
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-files"></i>files
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-growth"></i>growth
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-id-card"></i>id-card
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-idea"></i>idea
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-list"></i>list
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-meeting-add"></i>meeting-add
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-money-bag"></i>money-bag
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-people"></i>people
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pie-chart"></i>pie-chart
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-presentation-alt"></i>presentation-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-stamp"></i>stamp
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-stock-mobile"></i>stock-mobile
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-support"></i>support
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tasks-alt"></i>tasks-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wheel"></i>wheel
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Chart</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-chart-arrows-axis"></i>chart-arrows-axis
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-chart-bar-graph"></i>chart-bar-graph
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-chart-flow"></i>chart-flow
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-chart-flow-alt-1"></i>chart-flow-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-chart-flow-alt-2"></i>chart-flow-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-chart-histogram"></i>chart-histogram
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-chart-histogram-alt"></i>chart-histogram-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-chart-line"></i>chart-line
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-chart-line-alt"></i>chart-line-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-chart-pie"></i>chart-pie
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-chart-pie-alt"></i>chart-pie-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-chart-radar-graph"></i>chart-radar-graph
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Construction</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-architecture"></i>architecture
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-architecture-alt"></i>architecture-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-barricade"></i>barricade
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bricks"></i>bricks
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-calculations"></i>calculations
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cement-mix"></i>cement-mix
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cement-mixer"></i>cement-mixer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-danger-zone"></i>danger-zone
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-drill"></i>drill
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-eco-energy"></i>eco-energy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-eco-environmen"></i>eco-environmen
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-energy-air"></i>energy-air
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-energy-oil"></i>energy-oil
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-energy-savings"></i>energy-savings
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-energy-solar"></i>energy-solar
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-energy-water"></i>energy-water
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-engineer"></i>engineer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-fire-extinguisher-alt"></i>fire-extinguisher-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-fix-tools"></i>fix-tools
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-glue-oil"></i>glue-oil
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hammer-alt"></i>hammer-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-help-robot"></i>help-robot
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-industries"></i>industries
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-industries-alt-1"></i>industries-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-industries-alt-2"></i>industries-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-industries-alt-3"></i>industries-alt-3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-industries-alt-4"></i>industries-alt-4
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-industries-alt-5"></i>industries-alt-5
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-labour"></i>labour
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-mining"></i>mining
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-paint-brush"></i>paint-brush
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pollution"></i>pollution
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-power-zone"></i>power-zone
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-radio-active"></i>radio-active
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-recycle-alt"></i>recycle-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-recycling-man"></i>recycling-man
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-safety-hat"></i>safety-hat
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-safety-hat-light"></i>safety-hat-light
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-saw"></i>saw
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-screw-driver"></i>screw-driver
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-settings-alt"></i>settings-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tools-alt-1"></i>tools-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tools-alt-2"></i>tools-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tools-bag"></i>tools-bag
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-trolley"></i>trolley
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-trowel"></i>trowel
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-under-construction"></i>under-construction
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-under-construction-alt"></i>under-construction-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-vehicle-cement"></i>vehicle-cement
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-vehicle-crane"></i>vehicle-crane
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-vehicle-delivery-van"></i>vehicle-delivery-van
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-vehicle-dozer"></i>vehicle-dozer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-vehicle-excavator"></i>vehicle-excavator
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-vehicle-trucktor"></i>vehicle-trucktor
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-vehicle-wrecking"></i>vehicle-wrecking
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-worker"></i>worker
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-worker-group"></i>worker-group
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wrench"></i>wrench
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Currency</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-afghani"></i>cur-afghani
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-afghani-false"></i>cur-afghani-false
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-afghani-minus"></i>cur-afghani-minus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-afghani-plus"></i>cur-afghani-plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-afghani-true"></i>cur-afghani-true
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-baht"></i>cur-baht
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-baht-false"></i>cur-baht-false
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-baht-minus"></i>cur-baht-minus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-baht-plus"></i>cur-baht-plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-baht-true"></i>cur-baht-true
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-bitcoin"></i>cur-bitcoin
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-bitcoin-false"></i>cur-bitcoin-false
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-bitcoin-minus"></i>cur-bitcoin-minus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-bitcoin-plus"></i>cur-bitcoin-plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-bitcoin-true"></i>cur-bitcoin-true
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-dollar"></i>cur-dollar
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-dollar-flase"></i>cur-dollar-flase
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-dollar-minus"></i>cur-dollar-minus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-dollar-plus"></i>cur-dollar-plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-dollar-true"></i>cur-dollar-true
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-dong"></i>cur-dong
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-dong-false"></i>cur-dong-false
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-dong-minus"></i>cur-dong-minus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-dong-plus"></i>cur-dong-plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-dong-true"></i>cur-dong-true
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-euro"></i>cur-euro
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-euro-false"></i>cur-euro-false
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-euro-minus"></i>cur-euro-minus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-euro-plus"></i>cur-euro-plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-euro-true"></i>cur-euro-true
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-frank"></i>cur-frank
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-frank-false"></i>cur-frank-false
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-frank-minus"></i>cur-frank-minus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-frank-plus"></i>cur-frank-plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-frank-true"></i>cur-frank-true
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-hryvnia"></i>cur-hryvnia
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-hryvnia-false"></i>cur-hryvnia-false
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-hryvnia-minus"></i>cur-hryvnia-minus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-hryvnia-plus"></i>cur-hryvnia-plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-hryvnia-true"></i>cur-hryvnia-true
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-lira"></i>cur-lira
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-lira-false"></i>cur-lira-false
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-lira-minus"></i>cur-lira-minus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-lira-plus"></i>cur-lira-plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-lira-true"></i>cur-lira-true
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-peseta"></i>cur-peseta
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-peseta-false"></i>cur-peseta-false
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-peseta-minus"></i>cur-peseta-minus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-peseta-plus"></i>cur-peseta-plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-peseta-true"></i>cur-peseta-true
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-peso"></i>cur-peso
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-peso-false"></i>cur-peso-false
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-peso-minus"></i>cur-peso-minus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-peso-plus"></i>cur-peso-plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-peso-true"></i>cur-peso-true
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-pound"></i>cur-pound
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-pound-false"></i>cur-pound-false
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-pound-minus"></i>cur-pound-minus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-pound-plus"></i>cur-pound-plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-pound-true"></i>cur-pound-true
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-renminbi"></i>cur-renminbi
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-renminbi-false"></i>cur-renminbi-false
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-renminbi-minus"></i>cur-renminbi-minus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-renminbi-plus"></i>cur-renminbi-plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-renminbi-true"></i>cur-renminbi-true
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-riyal"></i>cur-riyal
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-riyal-false"></i>cur-riyal-false
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-riyal-minus"></i>cur-riyal-minus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-riyal-plus"></i>cur-riyal-plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-riyal-true"></i>cur-riyal-true
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-rouble"></i>cur-rouble
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-rouble-false"></i>cur-rouble-false
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-rouble-minus"></i>cur-rouble-minus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-rouble-plus"></i>cur-rouble-plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-rouble-true"></i>cur-rouble-true
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-rupee"></i>cur-rupee
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-rupee-false"></i>cur-rupee-false
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-rupee-minus"></i>cur-rupee-minus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-rupee-plus"></i>cur-rupee-plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-rupee-true"></i>cur-rupee-true
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-taka"></i>cur-taka
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-taka-false"></i>cur-taka-false
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-taka-minus"></i>cur-taka-minus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-taka-plus"></i>cur-taka-plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-taka-true"></i>cur-taka-true
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-turkish-lira"></i>cur-turkish-lira
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-turkish-lira-false"></i>cur-turkish-lira-false
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-turkish-lira-minus"></i>cur-turkish-lira-minus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-turkish-lira-plus"></i>cur-turkish-lira-plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-turkish-lira-true"></i>cur-turkish-lira-true
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-won"></i>cur-won
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-won-false"></i>cur-won-false
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-won-minus"></i>cur-won-minus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-won-plus"></i>cur-won-plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-won-true"></i>cur-won-true
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-yen"></i>cur-yen
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-yen-false"></i>cur-yen-false
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-yen-minus"></i>cur-yen-minus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-yen-plus"></i>cur-yen-plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cur-yen-true"></i>cur-yen-true
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Device</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-android-nexus"></i>android-nexus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-android-tablet"></i>android-tablet
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-apple-watch"></i>apple-watch
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-drwaing-tablet"></i>drwaing-tablet
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-earphone"></i>earphone
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-flash-drive"></i>flash-drive
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-game-control"></i>game-control
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-headphone-alt"></i>headphone-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-htc-one"></i>htc-one
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-imac"></i>imac
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ipad-touch"></i>ipad-touch
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-iphone"></i>iphone
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ipod-nano"></i>ipod-nano
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ipod-touch"></i>ipod-touch
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-keyboard-alt"></i>keyboard-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-keyboard-wireless"></i>keyboard-wireless
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-laptop-alt"></i>laptop-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-macbook"></i>macbook
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-magic-mouse"></i>magic-mouse
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-microphone-alt"></i>microphone-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-monitor"></i>monitor
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-mouse"></i>mouse
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-nintendo"></i>nintendo
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-playstation"></i>playstation
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-psvita"></i>psvita
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-radio-mic"></i>radio-mic
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-refrigerator"></i>refrigerator
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-samsung-galaxy"></i>samsung-galaxy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-surface-tablet"></i>surface-tablet
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-washing-machine"></i>washing-machine
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wifi-router"></i>wifi-router
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wii-u"></i>wii-u
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-windows-lumia"></i>windows-lumia
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wireless-mouse"></i>wireless-mouse
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-xbox-360"></i>xbox-360
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Directional</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-arrow-down"></i>arrow-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-arrow-left"></i>arrow-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-arrow-right"></i>arrow-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-arrow-up"></i>arrow-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-block-down"></i>block-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-block-left"></i>block-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-block-right"></i>block-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-block-up"></i>block-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bubble-down"></i>bubble-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bubble-left"></i>bubble-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bubble-right"></i>bubble-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bubble-up"></i>bubble-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-caret-down"></i>caret-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-caret-left"></i>caret-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-caret-right"></i>caret-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-caret-up"></i>caret-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-circled-down"></i>circled-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-circled-left"></i>circled-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-circled-right"></i>circled-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-circled-up"></i>circled-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-collapse"></i>collapse
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cursor-drag"></i>cursor-drag
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-curved-double-left"></i>curved-double-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-curved-double-right"></i>curved-double-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-curved-down"></i>curved-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-curved-left"></i>curved-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-curved-right"></i>curved-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-curved-up"></i>curved-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-dotted-down"></i>dotted-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-dotted-left"></i>dotted-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-dotted-right"></i>dotted-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-dotted-up"></i>dotted-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-double-left"></i>double-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-double-right"></i>double-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-drag"></i>drag
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-drag1"></i>drag1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-drag2"></i>drag2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-drag3"></i>drag3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-expand-alt"></i>expand-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hand-down"></i>hand-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hand-drag"></i>hand-drag
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hand-drag1"></i>hand-drag1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hand-drag2"></i>hand-drag2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hand-drawn-alt-down"></i>hand-drawn-alt-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hand-drawn-alt-left"></i>hand-drawn-alt-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hand-drawn-alt-right"></i>hand-drawn-alt-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hand-drawn-alt-up"></i>hand-drawn-alt-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hand-drawn-down"></i>hand-drawn-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hand-drawn-left"></i>hand-drawn-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hand-drawn-right"></i>hand-drawn-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hand-drawn-up"></i>hand-drawn-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hand-left"></i>hand-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hand-right"></i>hand-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hand-up"></i>hand-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-line-block-down"></i>line-block-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-line-block-left"></i>line-block-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-line-block-right"></i>line-block-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-line-block-up"></i>line-block-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-long-arrow-down"></i>long-arrow-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-long-arrow-left"></i>long-arrow-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-long-arrow-right"></i>long-arrow-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-long-arrow-up"></i>long-arrow-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rounded-collapse"></i>rounded-collapse
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rounded-double-left"></i>rounded-double-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rounded-double-right"></i>rounded-double-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rounded-down"></i>rounded-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rounded-expand"></i>rounded-expand
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rounded-left"></i>rounded-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rounded-left-down"></i>rounded-left-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rounded-left-up"></i>rounded-left-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rounded-right"></i>rounded-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rounded-right-down"></i>rounded-right-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rounded-right-up"></i>rounded-right-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rounded-up"></i>rounded-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-scroll-bubble-down"></i>scroll-bubble-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-scroll-bubble-left"></i>scroll-bubble-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-scroll-bubble-right"></i>scroll-bubble-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-scroll-bubble-up"></i>scroll-bubble-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-scroll-double-down"></i>scroll-double-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-scroll-double-left"></i>scroll-double-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-scroll-double-right"></i>scroll-double-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-scroll-double-up"></i>scroll-double-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-scroll-down"></i>scroll-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-scroll-left"></i>scroll-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-scroll-long-down"></i>scroll-long-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-scroll-long-left"></i>scroll-long-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-scroll-long-right"></i>scroll-long-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-scroll-long-up"></i>scroll-long-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-scroll-right"></i>scroll-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-scroll-up"></i>scroll-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-simple-down"></i>simple-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-simple-left"></i>simple-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-simple-left-down"></i>simple-left-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-simple-left-up"></i>simple-left-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-simple-right"></i>simple-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-simple-right-down"></i>simple-right-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-simple-right-up"></i>simple-right-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-simple-up"></i>simple-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-square-down"></i>square-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-square-left"></i>square-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-square-right"></i>square-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-square-up"></i>square-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-stylish-down"></i>stylish-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-stylish-left"></i>stylish-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-stylish-right"></i>stylish-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-stylish-up"></i>stylish-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-swoosh-down"></i>swoosh-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-swoosh-left"></i>swoosh-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-swoosh-right"></i>swoosh-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-swoosh-up"></i>swoosh-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-thin-double-left"></i>thin-double-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-thin-double-right"></i>thin-double-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-thin-down"></i>thin-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-thin-left"></i>thin-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-thin-right"></i>thin-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-thin-up"></i>thin-up
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Education</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-atom"></i>atom
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-award"></i>award
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bell-alt"></i>bell-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-book-alt"></i>book-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brainstorming"></i>brainstorming
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-certificate-alt-1"></i>certificate-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-certificate-alt-2"></i>certificate-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-dna-alt-2"></i>dna-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-education"></i>education
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-electron"></i>electron
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-fountain-pen"></i>fountain-pen
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-globe-alt"></i>globe-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-graduate-alt"></i>graduate-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-group-students"></i>group-students
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hat"></i>hat
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hat-alt"></i>hat-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-instrument"></i>instrument
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-lamp-light"></i>lamp-light
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-microscope-alt"></i>microscope-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-paper"></i>paper
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pen-alt-4"></i>pen-alt-4
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pen-nib"></i>pen-nib
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pencil-alt-5"></i>pencil-alt-5
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-quill-pen"></i>quill-pen
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-read-book"></i>read-book
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-read-book-alt"></i>read-book-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-school-bag"></i>school-bag
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-school-bus"></i>school-bus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-student"></i>student
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-student-alt"></i>student-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-teacher"></i>teacher
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-test-bulb"></i>test-bulb
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-test-tube-alt"></i>test-tube-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-university"></i>university
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Emoticon</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists ">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-emo-angry"></i>emo-angry
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-emo-astonished"></i>emo-astonished
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-emo-confounded"></i>emo-confounded
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-emo-confused"></i>emo-confused
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-emo-crying"></i>emo-crying
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-emo-dizzy"></i>emo-dizzy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-emo-expressionless"></i>emo-expressionless
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-emo-heart-eyes"></i>emo-heart-eyes
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-emo-laughing"></i>emo-laughing
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-emo-nerd-smile"></i>emo-nerd-smile
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-emo-open-mouth"></i>emo-open-mouth
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-emo-rage"></i>emo-rage
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-emo-rolling-eyes"></i>emo-rolling-eyes
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-emo-sad"></i>emo-sad
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-emo-simple-smile"></i>emo-simple-smile
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-emo-slightly-smile"></i>emo-slightly-smile
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-emo-smirk"></i>emo-smirk
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-emo-stuck-out-tongue"></i>emo-stuck-out-tongue
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-emo-wink-smile"></i>emo-wink-smile
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-emo-worried"></i>emo-worried
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">File Type</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-audio"></i>file-audio
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-avi-mp4"></i>file-avi-mp4
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-bmp"></i>file-bmp
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-code"></i>file-code
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-css"></i>file-css
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-document"></i>file-document
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-eps"></i>file-eps
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-excel"></i>file-excel
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-exe"></i>file-exe
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-file"></i>file-file
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-flv"></i>file-flv
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-gif"></i>file-gif
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-html5"></i>file-html5
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-image"></i>file-image
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-iso"></i>file-iso
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-java"></i>file-java
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-javascript"></i>file-javascript
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-jpg"></i>file-jpg
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-midi"></i>file-midi
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-mov"></i>file-mov
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-mp3"></i>file-mp3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-pdf"></i>file-pdf
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-php"></i>file-php
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-png"></i>file-png
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-powerpoint"></i>file-powerpoint
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-presentation"></i>file-presentation
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-psb"></i>file-psb
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-psd"></i>file-psd
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-python"></i>file-python
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-ruby"></i>file-ruby
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-spreadsheet"></i>file-spreadsheet
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-sql"></i>file-sql
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-svg"></i>file-svg
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-text"></i>file-text
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-tiff"></i>file-tiff
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-video"></i>file-video
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-wave"></i>file-wave
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-wmv"></i>file-wmv
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-word"></i>file-word
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-zip"></i>file-zip
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Food</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-apple"></i>apple
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-arabian-coffee"></i>arabian-coffee
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-artichoke"></i>artichoke
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-asparagus"></i>asparagus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-avocado"></i>avocado
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-baby-food"></i>baby-food
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-banana"></i>banana
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bbq"></i>bbq
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-beans"></i>beans
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-beer"></i>beer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bell-pepper-capsicum"></i>bell-pepper-capsicum
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-birthday-cake"></i>birthday-cake
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bread"></i>bread
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-broccoli"></i>broccoli
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-burger"></i>burger
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cabbage"></i>cabbage
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-carrot"></i>carrot
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cauli-flower"></i>cauli-flower
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cheese"></i>cheese
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-chef"></i>chef
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cherry"></i>cherry
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-chicken"></i>chicken
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-chicken-fry"></i>chicken-fry
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cocktail"></i>cocktail
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-coconut"></i>coconut
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-coffee-alt"></i>coffee-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-coffee-mug"></i>coffee-mug
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-coffee-pot"></i>coffee-pot
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cola"></i>cola
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-corn"></i>corn
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-croissant"></i>croissant
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-crop-plant"></i>crop-plant
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cucumber"></i>cucumber
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cup-cake"></i>cup-cake
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-dining-table"></i>dining-table
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-donut"></i>donut
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-egg-plant"></i>egg-plant
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-egg-poached"></i>egg-poached
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-farmer"></i>farmer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-farmer1"></i>farmer1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-fast-food"></i>fast-food
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-fish"></i>fish
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-food-basket"></i>food-basket
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-food-cart"></i>food-cart
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-fork-and-knife"></i>fork-and-knife
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-french-fries"></i>french-fries
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-fresh-juice"></i>fresh-juice
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-fruits"></i>fruits
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-grapes"></i>grapes
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-honey"></i>honey
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hot-dog"></i>hot-dog
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hotel-alt"></i>hotel-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ice-cream"></i>ice-cream
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ice-cream-alt"></i>ice-cream-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ketchup"></i>ketchup
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-kiwi"></i>kiwi
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-layered-cake"></i>layered-cake
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-lemon-alt"></i>lemon-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-lobster"></i>lobster
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-mango"></i>mango
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-milk"></i>milk
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-mushroom"></i>mushroom
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-noodles"></i>noodles
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-onion"></i>onion
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-orange"></i>orange
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pear"></i>pear
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-peas"></i>peas
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pepper"></i>pepper
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pie-alt"></i>pie-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pineapple"></i>pineapple
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pizza"></i>pizza
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pizza-slice"></i>pizza-slice
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-plant"></i>plant
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-popcorn"></i>popcorn
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-potato"></i>potato
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pumpkin"></i>pumpkin
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-raddish"></i>raddish
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-restaurant"></i>restaurant
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-restaurant-menu"></i>restaurant-menu
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-salt-and-pepper"></i>salt-and-pepper
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sandwich"></i>sandwich
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sausage"></i>sausage
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-shrimp"></i>shrimp
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sof-drinks"></i>sof-drinks
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-soup-bowl"></i>soup-bowl
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-spoon-and-fork"></i>spoon-and-fork
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-steak"></i>steak
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-strawberry"></i>strawberry
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sub-sandwich"></i>sub-sandwich
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sushi"></i>sushi
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-taco"></i>taco
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tea"></i>tea
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tea-pot"></i>tea-pot
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tomato"></i>tomato
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-waiter-alt"></i>waiter-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-watermelon"></i>watermelon
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wheat"></i>wheat
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Kids & Toys</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-abc"></i>abc
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-baby-cloth"></i>baby-cloth
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-baby-milk-bottle"></i>baby-milk-bottle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-baby-trolley"></i>baby-trolley
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-back-pack"></i>back-pack
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-candy"></i>candy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cycling"></i>cycling
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-holding-hands"></i>holding-hands
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-infant-nipple"></i>infant-nipple
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-kids-scooter"></i>kids-scooter
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-safety-pin"></i>safety-pin
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-teddy-bear"></i>teddy-bear
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-toy-ball"></i>toy-ball
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-toy-cat"></i>toy-cat
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-toy-duck"></i>toy-duck
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-toy-elephant"></i>toy-elephant
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-toy-hand"></i>toy-hand
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-toy-horse"></i>toy-horse
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-toy-lattu"></i>toy-lattu
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-toy-train"></i>toy-train
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-unique-idea"></i>unique-idea
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Law</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bag-alt"></i>bag-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-burglar"></i>burglar
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cannon-firing"></i>cannon-firing
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cc-camera"></i>cc-camera
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cop"></i>cop
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cop-badge"></i>cop-badge
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-court"></i>court
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-court-hammer"></i>court-hammer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-finger-print"></i>finger-print
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-handcuff"></i>handcuff
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-handcuff-alt"></i>handcuff-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-investigation"></i>investigation
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-investigator"></i>investigator
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-jail"></i>jail
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-judge"></i>judge
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-law"></i>law
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-law-alt-1"></i>law-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-law-alt-2"></i>law-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-law-alt-3"></i>law-alt-3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-law-book"></i>law-book
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-law-document"></i>law-document
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-lawyer"></i>lawyer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-lawyer-alt-1"></i>lawyer-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-lawyer-alt-2"></i>lawyer-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-order"></i>order
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pistol"></i>pistol
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-police"></i>police
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-police-badge"></i>police-badge
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-police-cap"></i>police-cap
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-police-car-alt-1"></i>police-car-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-police-car-alt-2"></i>police-car-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-police-hat"></i>police-hat
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-police-van"></i>police-van
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-protect"></i>protect
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-scales"></i>scales
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-thief"></i>thief
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-thief-alt"></i>thief-alt
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Mathematical</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-abacus"></i>abacus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-abacus-alt"></i>abacus-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-angle"></i>angle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-calculator-alt-1"></i>calculator-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-calculator-alt-2"></i>calculator-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-circle-ruler"></i>circle-ruler
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-circle-ruler-alt"></i>circle-ruler-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-compass-alt-1"></i>compass-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-compass-alt-2"></i>compass-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-compass-alt-3"></i>compass-alt-3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-compass-alt-4"></i>compass-alt-4
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-degrees"></i>degrees
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-degrees-alt-1"></i>degrees-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-degrees-alt-2"></i>degrees-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-golden-ratio"></i>golden-ratio
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-marker-alt-1"></i>marker-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-marker-alt-2"></i>marker-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-marker-alt-3"></i>marker-alt-3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-mathematical"></i>mathematical
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-mathematical-alt-1"></i>mathematical-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-mathematical-alt-2"></i>mathematical-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pen-alt-1"></i>pen-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pen-alt-2"></i>pen-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pen-alt-3"></i>pen-alt-3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pen-holder"></i>pen-holder
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pen-holder-alt-1"></i>pen-holder-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pencil-alt-1"></i>pencil-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pencil-alt-2"></i>pencil-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pencil-alt-3"></i>pencil-alt-3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pencil-alt-4"></i>pencil-alt-4
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ruler"></i>ruler
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ruler-alt-1"></i>ruler-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ruler-alt-2"></i>ruler-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ruler-compass"></i>ruler-compass
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ruler-compass-alt"></i>ruler-compass-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ruler-pencil"></i>ruler-pencil
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ruler-pencil-alt-1"></i>ruler-pencil-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ruler-pencil-alt-2"></i>ruler-pencil-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rulers"></i>rulers
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rulers-alt"></i>rulers-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-square-root"></i>square-root
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Medical</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-aids"></i>aids
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ambulance"></i>ambulance
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-autism"></i>autism
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bandage"></i>bandage
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bed-patient"></i>bed-patient
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-blind"></i>blind
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-blood"></i>blood
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-blood-drop"></i>blood-drop
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-blood-test"></i>blood-test
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-capsule"></i>capsule
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-crutches"></i>crutches
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-dna"></i>dna
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-dna-alt-1"></i>dna-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-doctor"></i>doctor
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-doctor-alt"></i>doctor-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-drug"></i>drug
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-drug-pack"></i>drug-pack
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-eye-alt"></i>eye-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-first-aid-alt"></i>first-aid-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-garbage"></i>garbage
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-heart-alt"></i>heart-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-heartbeat"></i>heartbeat
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-herbal"></i>herbal
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hospital"></i>hospital
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-icu"></i>icu
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-injection-syringe"></i>injection-syringe
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-laboratory"></i>laboratory
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-medical-sign"></i>medical-sign
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-medical-sign-alt"></i>medical-sign-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-nurse"></i>nurse
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-nurse-alt"></i>nurse-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-nursing-home"></i>nursing-home
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-operation-theater"></i>operation-theater
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-paralysis-disability"></i>paralysis-disability
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pills"></i>pills
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-prescription"></i>prescription
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pulse"></i>pulse
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-stethoscope"></i>stethoscope
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-stethoscope-alt"></i>stethoscope-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-stretcher"></i>stretcher
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-surgeon"></i>surgeon
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-surgeon-alt"></i>surgeon-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tablets"></i>tablets
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-test-bottle"></i>test-bottle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-test-tube"></i>test-tube
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-thermometer-alt"></i>thermometer-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tooth"></i>tooth
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-xray"></i>xray
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Mobile UI</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-add"></i>ui-add
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-alarm"></i>ui-alarm
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-battery"></i>ui-battery
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-block"></i>ui-block
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-bluetooth"></i>ui-bluetooth
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-brightness"></i>ui-brightness
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-browser"></i>ui-browser
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-calculator"></i>ui-calculator
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-calendar"></i>ui-calendar
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-call"></i>ui-call
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-camera"></i>ui-camera
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-cart"></i>ui-cart
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-cell-phone"></i>ui-cell-phone
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-chat"></i>ui-chat
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-check"></i>ui-check
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-clip"></i>ui-clip
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-clip-board"></i>ui-clip-board
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-clock"></i>ui-clock
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-close"></i>ui-close
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-contact-list"></i>ui-contact-list
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-copy"></i>ui-copy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-cut"></i>ui-cut
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-delete"></i>ui-delete
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-dial-phone"></i>ui-dial-phone
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-edit"></i>ui-edit
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-email"></i>ui-email
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-file"></i>ui-file
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-fire-wall"></i>ui-fire-wall
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-flash-light"></i>ui-flash-light
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-flight"></i>ui-flight
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-folder"></i>ui-folder
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-game"></i>ui-game
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-handicapped"></i>ui-handicapped
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-head-phone"></i>ui-head-phone
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-home"></i>ui-home
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-image"></i>ui-image
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-keyboard"></i>ui-keyboard
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-laoding"></i>ui-laoding
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-lock"></i>ui-lock
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-love"></i>ui-love
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-love-add"></i>ui-love-add
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-love-broken"></i>ui-love-broken
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-love-remove"></i>ui-love-remove
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-map"></i>ui-map
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-message"></i>ui-message
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-messaging"></i>ui-messaging
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-movie"></i>ui-movie
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-music"></i>ui-music
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-music-player"></i>ui-music-player
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-mute"></i>ui-mute
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-Refferal"></i>ui-Refferal
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-next"></i>ui-next
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-note"></i>ui-note
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-office"></i>ui-office
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-password"></i>ui-password
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-pause"></i>ui-pause
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-play"></i>ui-play
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-play-stop"></i>ui-play-stop
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-pointer"></i>ui-pointer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-power"></i>ui-power
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-press"></i>ui-press
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-previous"></i>ui-previous
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-rate-add"></i>ui-rate-add
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-rate-blank"></i>ui-rate-blank
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-rate-remove"></i>ui-rate-remove
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-rating"></i>ui-rating
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-record"></i>ui-record
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-remove"></i>ui-remove
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-reply"></i>ui-reply
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-rotation"></i>ui-rotation
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-rss"></i>ui-rss
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-search"></i>ui-search
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-settings"></i>ui-settings
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-social-link"></i>ui-social-link
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-tag"></i>ui-tag
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-text-chat"></i>ui-text-chat
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-text-loading"></i>ui-text-loading
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-theme"></i>ui-theme
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-timer"></i>ui-timer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-touch-phone"></i>ui-touch-phone
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-travel"></i>ui-travel
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-unlock"></i>ui-unlock
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-user"></i>ui-user
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-user-group"></i>ui-user-group
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-v-card"></i>ui-v-card
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-video"></i>ui-video
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-video-chat"></i>ui-video-chat
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-video-message"></i>ui-video-message
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-video-play"></i>ui-video-play
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-volume"></i>ui-volume
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-weather"></i>ui-weather
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-wifi"></i>ui-wifi
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-zoom-in"></i>ui-zoom-in
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ui-zoom-out"></i>ui-zoom-out
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Multimedia</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cassette"></i>cassette
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cassette-player"></i>cassette-player
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-forward"></i>forward
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-game"></i>game
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-guiter"></i>guiter
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-headphone-alt-1"></i>headphone-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-headphone-alt-2"></i>headphone-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-headphone-alt-3"></i>headphone-alt-3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-listening"></i>listening
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-megaphone"></i>megaphone
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-megaphone-alt"></i>megaphone-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-movie"></i>movie
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-mp3-player"></i>mp3-player
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-multimedia"></i>multimedia
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-music-disk"></i>music-disk
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-music-note"></i>music-note
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pause"></i>pause
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-play-alt-1"></i>play-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-play-alt-2"></i>play-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-play-alt-3"></i>play-alt-3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-play-pause"></i>play-pause
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-record"></i>record
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-retro-music-disk"></i>retro-music-disk
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rewind"></i>rewind
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-song-notes"></i>song-notes
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sound-wave"></i>sound-wave
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sound-wave-alt"></i>sound-wave-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-stop"></i>stop
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-video-alt"></i>video-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-video-cam"></i>video-cam
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-volume-bar"></i>volume-bar
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-volume-mute"></i>volume-mute
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-youtube-play"></i>youtube-play
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Payment</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-amazon"></i>amazon
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-amazon-alt"></i>amazon-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-american-express"></i>american-express
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-american-express-alt"></i>american-express-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-apple-pay"></i>apple-pay
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-apple-pay-alt"></i>apple-pay-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bank-transfer"></i>bank-transfer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bank-transfer-alt"></i>bank-transfer-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-braintree"></i>braintree
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-braintree-alt"></i>braintree-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cash-on-delivery"></i>cash-on-delivery
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cash-on-delivery-alt"></i>cash-on-delivery-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-checkout"></i>checkout
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-checkout-alt"></i>checkout-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-diners-club"></i>diners-club
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-diners-club-alt-1"></i>diners-club-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-diners-club-alt-2"></i>diners-club-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-diners-club-alt-3"></i>diners-club-alt-3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-discover"></i>discover
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-discover-alt"></i>discover-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-eway"></i>eway
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-eway-alt"></i>eway-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-google-wallet"></i>google-wallet
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-google-wallet-alt-1"></i>google-wallet-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-google-wallet-alt-2"></i>google-wallet-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-google-wallet-alt-3"></i>google-wallet-alt-3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-jcb"></i>jcb
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-jcb-alt"></i>jcb-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-maestro"></i>maestro
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-maestro-alt"></i>maestro-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-mastercard"></i>mastercard
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-mastercard-alt"></i>mastercard-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-payoneer"></i>payoneer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-payoneer-alt"></i>payoneer-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-paypal"></i>paypal
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-paypal-alt"></i>paypal-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sage"></i>sage
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sage-alt"></i>sage-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-skrill"></i>skrill
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-skrill-alt"></i>skrill-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-stripe"></i>stripe
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-stripe-alt"></i>stripe-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-visa"></i>visa
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-visa-alt"></i>visa-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-visa-electron"></i>visa-electron
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-western-union"></i>western-union
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-western-union-alt"></i>western-union-alt
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Person</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-boy"></i>boy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-business-man"></i>business-man
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-business-man-alt-1"></i>business-man-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-business-man-alt-2"></i>business-man-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-business-man-alt-3"></i>business-man-alt-3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-funky-man"></i>funky-man
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-girl"></i>girl
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-girl-alt"></i>girl-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hotel-boy"></i>hotel-boy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hotel-boy-alt"></i>hotel-boy-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-man-in-glasses"></i>man-in-glasses
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-user"></i>user
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-user-alt-1"></i>user-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-user-alt-2"></i>user-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-user-alt-3"></i>user-alt-3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-user-alt-4"></i>user-alt-4
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-user-alt-5"></i>user-alt-5
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-user-alt-6"></i>user-alt-6
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-user-alt-7"></i>user-alt-7
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-user-female"></i>user-female
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-user-male"></i>user-male
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-user-suited"></i>user-suited
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-users"></i>users
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-users-alt-1"></i>users-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-users-alt-2"></i>users-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-users-alt-3"></i>users-alt-3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-users-alt-4"></i>users-alt-4
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-users-alt-5"></i>users-alt-5
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-users-alt-6"></i>users-alt-6
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-users-social"></i>users-social
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-waiter"></i>waiter
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-woman-in-glasses"></i>woman-in-glasses
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Search</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-document-search"></i>document-search
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-folder-search"></i>folder-search
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-home-search"></i>home-search
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-job-search"></i>job-search
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-map-search"></i>map-search
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-restaurant-search"></i>restaurant-search
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-search"></i>search
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-search-alt-1"></i>search-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-search-alt-2"></i>search-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-stock-search"></i>stock-search
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-user-search"></i>user-search
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Social</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brand-drupal"></i>brand-drupal
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-500px"></i>social-500px
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-aim"></i>social-aim
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-badoo"></i>social-badoo
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-baidu-tieba"></i>social-baidu-tieba
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-bbm-messenger"></i>social-bbm-messenger
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-bebo"></i>social-bebo
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-behance"></i>social-behance
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-blogger"></i>social-blogger
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-bootstrap"></i>social-bootstrap
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-brightkite"></i>social-brightkite
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-cloudapp"></i>social-cloudapp
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-concrete5"></i>social-concrete5
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-delicious"></i>social-delicious
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-designbump"></i>social-designbump
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-designfloat"></i>social-designfloat
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-deviantart"></i>social-deviantart
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-digg"></i>social-digg
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-dotcms"></i>social-dotcms
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-dribbble"></i>social-dribbble
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-dribble"></i>social-dribble
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-dropbox"></i>social-dropbox
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-ebuddy"></i>social-ebuddy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-ello"></i>social-ello
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-ember"></i>social-ember
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-evernote"></i>social-evernote
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-facebook"></i>social-facebook
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-facebook-messenger"></i>social-facebook-messenger
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-feedburner"></i>social-feedburner
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-flikr"></i>social-flikr
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-folkd"></i>social-folkd
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-foursquare"></i>social-foursquare
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-friendfeed"></i>social-friendfeed
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-ghost"></i>social-ghost
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-github"></i>social-github
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-gnome"></i>social-gnome
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-google-buzz"></i>social-google-buzz
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-google-hangouts"></i>social-google-hangouts
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-google-map"></i>social-google-map
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-google-plus"></i>social-google-plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-google-talk"></i>social-google-talk
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-hype-machine"></i>social-hype-machine
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-instagram"></i>social-instagram
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-kakaotalk"></i>social-kakaotalk
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-kickstarter"></i>social-kickstarter
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-kik"></i>social-kik
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-kiwibox"></i>social-kiwibox
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-line"></i>social-line
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-linkedin"></i>social-linkedin
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-linux-mint"></i>social-linux-mint
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-livejournal"></i>social-livejournal
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-magento"></i>social-magento
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-meetme"></i>social-meetme
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-meetup"></i>social-meetup
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-mixx"></i>social-mixx
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-newsvine"></i>social-newsvine
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-nimbuss"></i>social-nimbuss
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-odnoklassniki"></i>social-odnoklassniki
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-opencart"></i>social-opencart
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-oscommerce"></i>social-oscommerce
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-pandora"></i>social-pandora
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-photobucket"></i>social-photobucket
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-picasa"></i>social-picasa
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-pinterest"></i>social-pinterest
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-prestashop"></i>social-prestashop
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-qik"></i>social-qik
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-qq"></i>social-qq
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-readernaut"></i>social-readernaut
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-reddit"></i>social-reddit
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-renren"></i>social-renren
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-rss"></i>social-rss
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-shopify"></i>social-shopify
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-silverstripe"></i>social-silverstripe
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-skype"></i>social-skype
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-slack"></i>social-slack
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-slashdot"></i>social-slashdot
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-slidshare"></i>social-slidshare
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-smugmug"></i>social-smugmug
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-snapchat"></i>social-snapchat
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-soundcloud"></i>social-soundcloud
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-spotify"></i>social-spotify
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-stack-exchange"></i>social-stack-exchange
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-stack-overflow"></i>social-stack-overflow
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-steam"></i>social-steam
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-stumbleupon"></i>social-stumbleupon
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-tagged"></i>social-tagged
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-technorati"></i>social-technorati
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-telegram"></i>social-telegram
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-tinder"></i>social-tinder
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-trello"></i>social-trello
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-tumblr"></i>social-tumblr
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-twitch"></i>social-twitch
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-twitter"></i>social-twitter
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-typo3"></i>social-typo3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-ubercart"></i>social-ubercart
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-viber"></i>social-viber
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-viddler"></i>social-viddler
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-vimeo"></i>social-vimeo
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-vine"></i>social-vine
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-virb"></i>social-virb
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-virtuemart"></i>social-virtuemart
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-vk"></i>social-vk
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-wechat"></i>social-wechat
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-weibo"></i>social-weibo
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-whatsapp"></i>social-whatsapp
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-xing"></i>social-xing
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-yahoo"></i>social-yahoo
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-yelp"></i>social-yelp
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-youku"></i>social-youku
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-youtube"></i>social-youtube
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-youtube-play"></i>social-youtube-play
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-social-zencart"></i>social-zencart
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Sport</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-badminton-birdie"></i>badminton-birdie
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-baseball"></i>baseball
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-baseballer"></i>baseballer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-basketball"></i>basketball
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-basketball-hoop"></i>basketball-hoop
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-billiard-ball"></i>billiard-ball
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-boot-alt-1"></i>boot-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-boot-alt-2"></i>boot-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bowling"></i>bowling
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bowling-alt"></i>bowling-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-canoe"></i>canoe
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cheer-leader"></i>cheer-leader
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-climbing"></i>climbing
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-corner"></i>corner
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cyclist"></i>cyclist
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-dumbbell"></i>dumbbell
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-dumbbell-alt"></i>dumbbell-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-field"></i>field
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-field-alt"></i>field-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-football-alt"></i>football-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-foul"></i>foul
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-goal"></i>goal
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-goal-keeper"></i>goal-keeper
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-golf"></i>golf
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-golf-alt"></i>golf-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-golf-bag"></i>golf-bag
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-golf-field"></i>golf-field
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-golfer"></i>golfer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-gym"></i>gym
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-gym-alt-1"></i>gym-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-gym-alt-2"></i>gym-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-gym-alt-3"></i>gym-alt-3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hand-grippers"></i>hand-grippers
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-heart-beat-alt"></i>heart-beat-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-helmet"></i>helmet
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hockey"></i>hockey
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hockey-alt"></i>hockey-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ice-skate"></i>ice-skate
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-jersey"></i>jersey
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-jersey-alt"></i>jersey-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-jumping"></i>jumping
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-kick"></i>kick
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-leg"></i>leg
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-match-review"></i>match-review
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-medal-alt"></i>medal-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-muscle"></i>muscle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-muscle-alt"></i>muscle-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-offside"></i>offside
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-olympic"></i>olympic
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-olympic-logo"></i>olympic-logo
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-padding"></i>padding
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-penalty-card"></i>penalty-card
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-racer"></i>racer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-racing-car"></i>racing-car
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-racing-flag"></i>racing-flag
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-racing-flag-alt"></i>racing-flag-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-racings-wheel"></i>racings-wheel
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-referee"></i>referee
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-refree-jersey"></i>refree-jersey
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-result"></i>result
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rugby"></i>rugby
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rugby-ball"></i>rugby-ball
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rugby-player"></i>rugby-player
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-runner"></i>runner
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-runner-alt-1"></i>runner-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-runner-alt-2"></i>runner-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-score-board"></i>score-board
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-skiing-man"></i>skiing-man
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-skydiving-goggles"></i>skydiving-goggles
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-snow-mobile"></i>snow-mobile
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-steering"></i>steering
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-substitute"></i>substitute
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-swimmer"></i>swimmer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-table-tennis"></i>table-tennis
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-team"></i>team
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-team-alt"></i>team-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tennis"></i>tennis
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tennis-player"></i>tennis-player
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-time"></i>time
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-track"></i>track
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tracking"></i>tracking
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-trophy"></i>trophy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-trophy-alt"></i>trophy-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-volleyball"></i>volleyball
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-volleyball-alt"></i>volleyball-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-volleyball-fire"></i>volleyball-fire
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-water-bottle"></i>water-bottle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-whisle"></i>whisle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-win-trophy"></i>win-trophy
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
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-align-center"></i>align-center
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-align-left"></i>align-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-align-right"></i>align-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-all-caps"></i>all-caps
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bold"></i>bold
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brush"></i>brush
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-clip-board"></i>clip-board
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-code-alt"></i>code-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-color-bucket"></i>color-bucket
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-color-picker"></i>color-picker
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-copy-alt"></i>copy-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-copy-black"></i>copy-black
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cut"></i>cut
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-delete-alt"></i>delete-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-edit-alt"></i>edit-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-eraser-alt"></i>eraser-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file-alt"></i>file-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-font"></i>font
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-header"></i>header
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-indent"></i>indent
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-italic-alt"></i>italic-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-justify-all"></i>justify-all
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-justify-center"></i>justify-center
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-justify-left"></i>justify-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-justify-right"></i>justify-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-line-height"></i>line-height
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-link-alt"></i>link-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-listine-dots"></i>listine-dots
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-listing-box"></i>listing-box
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-listing-number"></i>listing-number
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-marker"></i>marker
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-outdent"></i>outdent
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-paper-clip"></i>paper-clip
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-paragraph"></i>paragraph
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pin"></i>pin
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-printer"></i>printer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-redo"></i>redo
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rotation"></i>rotation
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-save"></i>save
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-small-cap"></i>small-cap
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-strike-through"></i>strike-through
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sub-listing"></i>sub-listing
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-subscript"></i>subscript
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-superscript"></i>superscript
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-table"></i>table
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-text-height"></i>text-height
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-text-width"></i>text-width
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-trash"></i>trash
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-underline"></i>underline
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-undo"></i>undo
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-unlink"></i>unlink
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Transport</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-air-balloon"></i>air-balloon
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-airplane"></i>airplane
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-airplane-alt"></i>airplane-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ambulance-crescent"></i>ambulance-crescent
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ambulance-cross"></i>ambulance-cross
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-articulated-truck"></i>articulated-truck
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-auto-rickshaw"></i>auto-rickshaw
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bicycle-alt-1"></i>bicycle-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bicycle-alt-2"></i>bicycle-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bull-dozer"></i>bull-dozer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bus-alt-1"></i>bus-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bus-alt-2"></i>bus-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bus-alt-3"></i>bus-alt-3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cable-car"></i>cable-car
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-car-alt-1"></i>car-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-car-alt-2"></i>car-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-car-alt-3"></i>car-alt-3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-car-alt-4"></i>car-alt-4
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-concrete-mixer"></i>concrete-mixer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-delivery-time"></i>delivery-time
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-excavator"></i>excavator
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-fast-delivery"></i>fast-delivery
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-fire-truck"></i>fire-truck
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-fire-truck-alt"></i>fire-truck-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-fork-lift"></i>fork-lift
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-free-delivery"></i>free-delivery
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-golf-cart"></i>golf-cart
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-helicopter"></i>helicopter
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-motor-bike"></i>motor-bike
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-motor-bike-alt"></i>motor-bike-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-motor-biker"></i>motor-biker
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-oil-truck"></i>oil-truck
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-police-car"></i>police-car
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rickshaw"></i>rickshaw
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rocket-alt-1"></i>rocket-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rocket-alt-2"></i>rocket-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sail-boat"></i>sail-boat
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-scooter"></i>scooter
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sea-plane"></i>sea-plane
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ship-alt"></i>ship-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-speed-boat"></i>speed-boat
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-taxi"></i>taxi
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tow-truck"></i>tow-truck
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tractor"></i>tractor
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-traffic-light"></i>traffic-light
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-train-line"></i>train-line
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-train-steam"></i>train-steam
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tram"></i>tram
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-truck"></i>truck
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-truck-alt"></i>truck-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-truck-loaded"></i>truck-loaded
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-van"></i>van
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-van-alt"></i>van-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-yacht"></i>yacht
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Travel</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-5-star-hotel"></i>5-star-hotel
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-anchor-alt"></i>anchor-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-beach-bed"></i>beach-bed
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-camping-vest"></i>camping-vest
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-coconut-alt"></i>coconut-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-direction-sign"></i>direction-sign
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hill-side"></i>hill-side
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-island-alt"></i>island-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-long-drive"></i>long-drive
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-map-pins"></i>map-pins
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-plane-ticket"></i>plane-ticket
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sail-boat-alt-1"></i>sail-boat-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sail-boat-alt-2"></i>sail-boat-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sandals-female"></i>sandals-female
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sandals-male"></i>sandals-male
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-travelling"></i>travelling
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Weather</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-breakdown"></i>breakdown
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-celsius"></i>celsius
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-clouds"></i>clouds
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cloudy"></i>cloudy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-compass-alt"></i>compass-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-dust"></i>dust
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-eclipse"></i>eclipse
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-fahrenheit"></i>fahrenheit
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-forest-fire"></i>forest-fire
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-full-night"></i>full-night
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-full-sunny"></i>full-sunny
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hail"></i>hail
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hail-night"></i>hail-night
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hail-rainy"></i>hail-rainy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hail-rainy-night"></i>hail-rainy-night
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hail-rainy-sunny"></i>hail-rainy-sunny
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hail-sunny"></i>hail-sunny
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hail-thunder"></i>hail-thunder
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hail-thunder-night"></i>hail-thunder-night
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hail-thunder-sunny"></i>hail-thunder-sunny
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hill"></i>hill
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hill-night"></i>hill-night
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hill-sunny"></i>hill-sunny
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hurricane"></i>hurricane
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-island"></i>island
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-meteor"></i>meteor
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-night"></i>night
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rainy"></i>rainy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rainy-night"></i>rainy-night
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rainy-sunny"></i>rainy-sunny
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rainy-thunder"></i>rainy-thunder
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-showy-night-hail"></i>showy-night-hail
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-snow"></i>snow
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-snow-temp"></i>snow-temp
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-snowy"></i>snowy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-snowy-hail"></i>snowy-hail
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-snowy-night"></i>snowy-night
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-snowy-night-rainy"></i>snowy-night-rainy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-snowy-rainy"></i>snowy-rainy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-snowy-sunny"></i>snowy-sunny
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-snowy-sunny-hail"></i>snowy-sunny-hail
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-snowy-sunny-rainy"></i>snowy-sunny-rainy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-snowy-thunder"></i>snowy-thunder
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-snowy-thunder-night"></i>snowy-thunder-night
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-snowy-thunder-sunny"></i>snowy-thunder-sunny
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-snowy-windy"></i>snowy-windy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-snowy-windy-night"></i>snowy-windy-night
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-snowy-windy-sunny"></i>snowy-windy-sunny
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sun-alt"></i>sun-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sun-rise"></i>sun-rise
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sun-set"></i>sun-set
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sunny"></i>sunny
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sunny-day-temp"></i>sunny-day-temp
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-thermometer"></i>thermometer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-thinder-light"></i>thinder-light
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tornado"></i>tornado
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-umbrella-alt"></i>umbrella-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-volcano"></i>volcano
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wave"></i>wave
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wind"></i>wind
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wind-scale-0"></i>wind-scale-0
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wind-scale-1"></i>wind-scale-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wind-scale-10"></i>wind-scale-10
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wind-scale-11"></i>wind-scale-11
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wind-scale-12"></i>wind-scale-12
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wind-scale-2"></i>wind-scale-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wind-scale-3"></i>wind-scale-3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wind-scale-4"></i>wind-scale-4
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wind-scale-5"></i>wind-scale-5
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wind-scale-6"></i>wind-scale-6
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wind-scale-7"></i>wind-scale-7
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wind-scale-8"></i>wind-scale-8
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wind-scale-9"></i>wind-scale-9
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wind-waves"></i>wind-waves
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-windy"></i>windy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-windy-hail"></i>windy-hail
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-windy-night"></i>windy-night
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-windy-raining"></i>windy-raining
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-windy-sunny"></i>windy-sunny
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-windy-thunder"></i>windy-thunder
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-windy-thunder-raining"></i>windy-thunder-raining
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Web Application</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists">
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-addons"></i>addons
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-address-book"></i>address-book
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-adjust"></i>adjust
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-alarm"></i>alarm
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-anchor"></i>anchor
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-archive"></i>archive
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-at"></i>at
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-attachment"></i>attachment
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-audio"></i>audio
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-auto-mobile"></i>auto-mobile
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-automation"></i>automation
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-baby"></i>baby
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-badge"></i>badge
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bag"></i>bag
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ban"></i>ban
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bank"></i>bank
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bar-code"></i>bar-code
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bars"></i>bars
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-battery-empty"></i>battery-empty
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-battery-full"></i>battery-full
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-battery-half"></i>battery-half
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-battery-low"></i>battery-low
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-beach"></i>beach
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-beaker"></i>beaker
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bear"></i>bear
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-beard"></i>beard
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bed"></i>bed
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bell"></i>bell
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-beverage"></i>beverage
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bicycle"></i>bicycle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bill"></i>bill
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bin"></i>bin
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-binary"></i>binary
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-binoculars"></i>binoculars
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bird"></i>bird
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-birds"></i>birds
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-black-board"></i>black-board
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bluetooth"></i>bluetooth
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bolt"></i>bolt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bomb"></i>bomb
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-book"></i>book
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-book-mark"></i>book-mark
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-boot"></i>boot
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-box"></i>box
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-brain"></i>brain
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-briefcase"></i>briefcase
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-broken"></i>broken
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bucket"></i>bucket
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bucket1"></i>bucket1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bucket2"></i>bucket2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bug"></i>bug
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-building"></i>building
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bullet"></i>bullet
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bullhorn"></i>bullhorn
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bullseye"></i>bullseye
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-bus"></i>bus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-butterfly"></i>butterfly
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cab"></i>cab
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-calculator"></i>calculator
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-calendar"></i>calendar
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-camera"></i>camera
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-camera-alt"></i>camera-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-car"></i>car
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-card"></i>card
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cart"></i>cart
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cc"></i>cc
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-certificate"></i>certificate
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-charging"></i>charging
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-chat"></i>chat
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-check"></i>check
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-check-alt"></i>check-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-check-circled"></i>check-circled
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-checked"></i>checked
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-children-care"></i>children-care
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-clock-time"></i>clock-time
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-close"></i>close
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-close-circled"></i>close-circled
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-close-line"></i>close-line
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-close-line-circled"></i>close-line-circled
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-close-line-squared"></i>close-line-squared
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-close-line-squared-alt"></i>close-line-squared-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-close-squared"></i>close-squared
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-close-squared-alt"></i>close-squared-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cloud"></i>cloud
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cloud-download"></i>cloud-download
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cloud-refresh"></i>cloud-refresh
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cloud-upload"></i>cloud-upload
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-code"></i>code
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-code-not-allowed"></i>code-not-allowed
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-coffee-cup"></i>coffee-cup
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-comment"></i>comment
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-compass"></i>compass
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-computer"></i>computer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-connection"></i>connection
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-console"></i>console
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-contacts"></i>contacts
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-contrast"></i>contrast
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-copy"></i>copy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-copyright"></i>copyright
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-credit-card"></i>credit-card
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-crop"></i>crop
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-crown"></i>crown
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cube"></i>cube
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-cubes"></i>cubes
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-culinary"></i>culinary
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-dashboard"></i>dashboard
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-dashboard-web"></i>dashboard-web
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-data"></i>data
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-database"></i>database
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-database-add"></i>database-add
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-database-locked"></i>database-locked
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-database-remove"></i>database-remove
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-delete"></i>delete
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-diamond"></i>diamond
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-dice"></i>dice
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-disabled"></i>disabled
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-disc"></i>disc
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-diskette"></i>diskette
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-document-folder"></i>document-folder
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-download"></i>download
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-download-alt"></i>download-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-downloaded"></i>downloaded
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-earth"></i>earth
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ebook"></i>ebook
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-edit"></i>edit
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-eject"></i>eject
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-email"></i>email
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-envelope"></i>envelope
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-envelope-open"></i>envelope-open
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-eraser"></i>eraser
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-error"></i>error
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-exchange"></i>exchange
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-exclamation"></i>exclamation
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-exclamation-circle"></i>exclamation-circle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-exclamation-square"></i>exclamation-square
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-exclamation-tringle"></i>exclamation-tringle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-exit"></i>exit
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-expand"></i>expand
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-external"></i>external
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-external-link"></i>external-link
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-eye"></i>eye
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-eye-blocked"></i>eye-blocked
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-eye-dropper"></i>eye-dropper
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-favourite"></i>favourite
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-fax"></i>fax
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-female"></i>female
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-file"></i>file
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-film"></i>film
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-filter"></i>filter
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-fire"></i>fire
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-fire-burn"></i>fire-burn
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-fire-extinguisher"></i>fire-extinguisher
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-first-aid"></i>first-aid
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-flag"></i>flag
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-flag-alt-1"></i>flag-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-flag-alt-2"></i>flag-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-flash"></i>flash
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-flash-light"></i>flash-light
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-flask"></i>flask
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-focus"></i>focus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-folder"></i>folder
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-folder-open"></i>folder-open
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-foot-print"></i>foot-print
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-football"></i>football
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-football-american"></i>football-american
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-game-console"></i>game-console
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-game-pad"></i>game-pad
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-gavel"></i>gavel
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-gear"></i>gear
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-gears"></i>gears
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-gift"></i>gift
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-glass"></i>glass
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-globe"></i>globe
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-graduate"></i>graduate
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-graffiti"></i>graffiti
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-grocery"></i>grocery
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-group"></i>group
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hammer"></i>hammer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hand"></i>hand
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hanger"></i>hanger
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hard-disk"></i>hard-disk
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-headphone"></i>headphone
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-heart"></i>heart
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-heart-beat"></i>heart-beat
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-history"></i>history
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-home"></i>home
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-horn"></i>horn
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hotel"></i>hotel
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-hour-glass"></i>hour-glass
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-id"></i>id
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-image"></i>image
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-inbox"></i>inbox
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-infinite"></i>infinite
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-info"></i>info
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-info-circle"></i>info-circle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-info-square"></i>info-square
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-institution"></i>institution
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-interface"></i>interface
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-invisible"></i>invisible
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-italic"></i>italic
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-jacket"></i>jacket
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-jar"></i>jar
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-jewlery"></i>jewlery
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-karate"></i>karate
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-key"></i>key
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-key-hole"></i>key-hole
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-keyboard"></i>keyboard
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-kid"></i>kid
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-label"></i>label
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-lamp"></i>lamp
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-laptop"></i>laptop
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-layers"></i>layers
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-layout"></i>layout
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-leaf"></i>leaf
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-leaflet"></i>leaflet
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-learn"></i>learn
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-legal"></i>legal
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-lego"></i>lego
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-lemon"></i>lemon
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-lens"></i>lens
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-letter"></i>letter
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-letterbox"></i>letterbox
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-library"></i>library
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-license"></i>license
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-life-bouy"></i>life-bouy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-life-buoy"></i>life-buoy
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-life-jacket"></i>life-jacket
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-life-ring"></i>life-ring
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-light-bulb"></i>light-bulb
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-lighter"></i>lighter
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-lightning-ray"></i>lightning-ray
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-like"></i>like
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-link"></i>link
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-live-support"></i>live-support
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-location-arrow"></i>location-arrow
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-location-pin"></i>location-pin
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-lock"></i>lock
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-login"></i>login
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-logout"></i>logout
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-lollipop"></i>lollipop
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-look"></i>look
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-loop"></i>loop
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-luggage"></i>luggage
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-lunch"></i>lunch
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-lungs"></i>lungs
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-magic"></i>magic
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-magic-alt"></i>magic-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-magnet"></i>magnet
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-mail"></i>mail
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-mail-box"></i>mail-box
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-male"></i>male
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-map"></i>map
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-math"></i>math
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-maximize"></i>maximize
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-measure"></i>measure
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-medal"></i>medal
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-medical"></i>medical
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-medicine"></i>medicine
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-mega-phone"></i>mega-phone
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-memorial"></i>memorial
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-memory-card"></i>memory-card
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-mic"></i>mic
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-mic-mute"></i>mic-mute
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-micro-chip"></i>micro-chip
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-microphone"></i>microphone
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-microscope"></i>microscope
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-military"></i>military
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-mill"></i>mill
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-minus"></i>minus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-minus-circle"></i>minus-circle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-minus-square"></i>minus-square
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-mobile-phone"></i>mobile-phone
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-molecule"></i>molecule
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-money"></i>money
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-moon"></i>moon
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-mop"></i>mop
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-muffin"></i>muffin
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-music"></i>music
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-music-alt"></i>music-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-music-notes"></i>music-notes
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-mustache"></i>mustache
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-mute-volume"></i>mute-volume
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-navigation"></i>navigation
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-navigation-menu"></i>navigation-menu
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-Refferal"></i>Refferal
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-Refferal-tower"></i>Refferal-tower
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-news"></i>news
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-newspaper"></i>newspaper
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-no-smoking"></i>no-smoking
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-not-allowed"></i>not-allowed
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-notebook"></i>notebook
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-notepad"></i>notepad
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-notification"></i>notification
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-numbered"></i>numbered
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-opposite"></i>opposite
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-optic"></i>optic
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-options"></i>options
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-package"></i>package
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-page"></i>page
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-paint"></i>paint
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-paper-plane"></i>paper-plane
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-paperclip"></i>paperclip
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-papers"></i>papers
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-paw"></i>paw
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pay"></i>pay
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pen"></i>pen
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pencil"></i>pencil
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-penguin-linux"></i>penguin-linux
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pestle"></i>pestle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-phone"></i>phone
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-phone-circle"></i>phone-circle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-picture"></i>picture
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pie"></i>pie
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pine"></i>pine
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-pixels"></i>pixels
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-play"></i>play
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-plugin"></i>plugin
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-plus"></i>plus
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-plus-circle"></i>plus-circle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-plus-square"></i>plus-square
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-polygonal"></i>polygonal
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-power"></i>power
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-presentation"></i>presentation
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-price"></i>price
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-print"></i>print
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-puzzle"></i>puzzle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-qr-code"></i>qr-code
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-queen"></i>queen
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-question"></i>question
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-question-circle"></i>question-circle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-question-square"></i>question-square
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-quote-left"></i>quote-left
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-quote-right"></i>quote-right
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-radio"></i>radio
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-random"></i>random
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-recycle"></i>recycle
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-refresh"></i>refresh
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-repair"></i>repair
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-reply"></i>reply
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-reply-all"></i>reply-all
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-resize"></i>resize
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-responsive"></i>responsive
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-retweet"></i>retweet
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-road"></i>road
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-robot"></i>robot
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rocket"></i>rocket
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-royal"></i>royal
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-rss-feed"></i>rss-feed
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-safety"></i>safety
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sale-discount"></i>sale-discount
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-satellite"></i>satellite
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-send-mail"></i>send-mail
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-server"></i>server
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-settings"></i>settings
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-share"></i>share
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-share-alt"></i>share-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-share-boxed"></i>share-boxed
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-shield"></i>shield
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ship"></i>ship
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-shopping-cart"></i>shopping-cart
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sign-in"></i>sign-in
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sign-out"></i>sign-out
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-signal"></i>signal
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-site-map"></i>site-map
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-smart-phone"></i>smart-phone
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-soccer"></i>soccer
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sort"></i>sort
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sort-alt"></i>sort-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-space"></i>space
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-spanner"></i>spanner
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-speech-comments"></i>speech-comments
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-speed-meter"></i>speed-meter
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-spinner"></i>spinner
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-spinner-alt-1"></i>spinner-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-spinner-alt-2"></i>spinner-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-spinner-alt-3"></i>spinner-alt-3
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-spinner-alt-4"></i>spinner-alt-4
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-spinner-alt-5"></i>spinner-alt-5
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-spinner-alt-6"></i>spinner-alt-6
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-spreadsheet"></i>spreadsheet
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-square"></i>square
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ssl-security"></i>ssl-security
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-star"></i>star
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-star-alt-1"></i>star-alt-1
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-star-alt-2"></i>star-alt-2
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-street-view"></i>street-view
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-sun"></i>sun
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-support-faq"></i>support-faq
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tack-pin"></i>tack-pin
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tag"></i>tag
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tags"></i>tags
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tasks"></i>tasks
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-telephone"></i>telephone
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-telescope"></i>telescope
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-terminal"></i>terminal
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-thumbs-down"></i>thumbs-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-thumbs-up"></i>thumbs-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tick-boxed"></i>tick-boxed
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tick-mark"></i>tick-mark
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-ticket"></i>ticket
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tie"></i>tie
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-toggle-off"></i>toggle-off
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-toggle-on"></i>toggle-on
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tools"></i>tools
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-transparent"></i>transparent
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-tree"></i>tree
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-umbrella"></i>umbrella
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-unlock"></i>unlock
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-unlocked"></i>unlocked
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-upload"></i>upload
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-upload-alt"></i>upload-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-usb"></i>usb
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-usb-drive"></i>usb-drive
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-vector-path"></i>vector-path
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-verification-check"></i>verification-check
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-video"></i>video
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-video-clapper"></i>video-clapper
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-volume-down"></i>volume-down
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-volume-off"></i>volume-off
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-volume-up"></i>volume-up
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wall"></i>wall
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wall-clock"></i>wall-clock
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wallet"></i>wallet
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-warning"></i>warning
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-warning-alt"></i>warning-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-water-drop"></i>water-drop
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-web"></i>web
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wheelchair"></i>wheelchair
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wifi"></i>wifi
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-wifi-alt"></i>wifi-alt
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-world"></i>world
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-zigzag"></i>zigzag
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4"><i
                                            className="icofont icofont-zipped"></i>zipped
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


export default IcoIcon;