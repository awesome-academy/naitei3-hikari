import React, { Component } from 'react';
import Slider from "react-slick";

// import Custom Componenets
import Breadcrumb from '../../common/breadcrumb.component';
class Carousel extends Component {

    render() {

        var basic_settings = {
            dots: true,
            infinite: true,
            speed: 100,
            slidesToShow: 5,
            slidesToScroll: 5,
            adaptiveHeight: true,
            centerPadding:'10px',
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        var responsive_settings = {
            dots: true,
            infinite: true,
            speed: 100,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        var Center_settings = {
            dots: true,
            infinite: true,
            speed: 100,
            slidesToShow: 3,
            slidesToScroll: 3,
            className: "center",
            centerMode: true,
            centerPadding: "60px",
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        var lazyload_settings = {
            dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        var Merge_settings = {
            dots: false,
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
            adaptiveHeight:true,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div>
                <Breadcrumb title="Owl Carousel" parent="Advance"/>
                {/*Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">

                            <div className="card">
                                <div className="card-header">
                                    <h5>Basic Example</h5>
                                </div>
                                <div className="card-body">
                                    <Slider {...basic_settings}>
                                        <img className="p-2" src={require('../../../assets/images/slider/2.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/3.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/1.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/4.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/5.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/6.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/7.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/8.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/9.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/10.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/11.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/1.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/2.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/3.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/4.jpg')} alt=""/>
                                    </Slider>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header">
                                    <h5>Responsive Example</h5>
                                </div>
                                <div className="card-body">
                                    <Slider {...responsive_settings}>
                                        <img className="p-2" src={require('../../../assets/images/slider/1.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/2.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/3.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/4.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/5.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/6.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/7.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/8.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/9.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/10.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/11.jpg')} alt=""/>
                                    </Slider>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header">
                                    <h5>Center Example</h5>
                                </div>
                                <div className="card-body">
                                    <Slider {...Center_settings}>
                                        <img className="p-2" src={require('../../../assets/images/slider/1.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/2.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/3.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/4.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/5.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/6.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/7.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/8.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/9.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/10.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/11.jpg')} alt=""/>
                                    </Slider>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header">
                                    <h5>LazyLoad Example</h5>
                                </div>
                                <div className="card-body">
                                    <Slider {...lazyload_settings}>
                                        <img className="p-2" src={require('../../../assets/images/slider/1.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/2.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/3.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/4.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/5.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/6.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/7.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/8.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/9.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/10.jpg')} alt=""/>
                                        <img className="p-2" src={require('../../../assets/images/slider/11.jpg')} alt=""/>
                                    </Slider>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header">
                                    <h5>Merge Example</h5>
                                </div>
                                <div className="card-body">
                                    <Slider {...Merge_settings}>
                                        <div className="p-2" ><img className="p-2" src={require('../../../assets/images/slider/1.jpg')} alt=""/></div>
                                        <div className="p-2" ><img className="p-2" src={require('../../../assets/images/slider/2.jpg')} alt=""/></div>
                                        <div className="p-2" ><img className="p-2" src={require('../../../assets/images/slider/3.jpg')} alt=""/></div>
                                        <div className="p-2" ><img className="p-2" src={require('../../../assets/images/slider/4.jpg')} alt=""/></div>
                                        <div className="p-2" ><img className="p-2" src={require('../../../assets/images/slider/5.jpg')} alt=""/></div>
                                        <div className="p-2" ><img className="p-2" src={require('../../../assets/images/slider/6.jpg')} alt=""/></div>
                                        <div className="p-2" ><img className="p-2" src={require('../../../assets/images/slider/7.jpg')} alt=""/></div>
                                        <div className="p-2" ><img className="p-2" src={require('../../../assets/images/slider/8.jpg')} alt=""/></div>
                                        <div className="p-2" ><img className="p-2" src={require('../../../assets/images/slider/9.jpg')} alt=""/></div>
                                        <div className="p-2" ><img className="p-2" src={require('../../../assets/images/slider/10.jpg')} alt=""/></div>
                                        <div className="p-2" ><img className="p-2" src={require('../../../assets/images/slider/11.jpg')} alt=""/></div>
                                    </Slider>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/*Container-fluid Ends*/}
            </div>
        )
    }
}
export default Carousel;