import React, {Component} from 'react';

class ComingSoon extends Component {

    constructor(props) {
        super(props);
        this.state = {style:{}}
    };

    componentDidMount() {
        setTimeout(function () {
            this.setState({style: {display:'none'}});
        }.bind(this),1000)
    }

    render() {
        let style = this.state.style;
        return (
            <div>
                <div className='loader-wrapper' style={style}>
                    <div className="loader bg-white">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <h4>Have a great day at work today <span>&#x263A;</span></h4>
                    </div>
                </div>
                 {/*Loader ends */}
                {/*Maintenance start */}
                <div class="error-wrapper">
                    <div class="container">
                        <ul class="maintenance-icons">
                            <li><i class="fa fa-cog"></i></li>
                            <li><i class="fa fa-cog"></i></li>
                            <li><i class="fa fa-cog"></i></li>
                        </ul>
                        <div class="maintenance-heading">
                            <img src={require('../..//assets/images/cloud-bg-1.png')} class="cloud-first" alt=""/>
                                <h2 class="headline">MAINTENANCE</h2>
                                <img src={require('../../assets/images/cloud-bg-2.png')} class="cloud-second" alt=""/>
                        </div>
                        <h4 class="sub-content">Our Site is Currently under maintenance We will be back Shortly<br/> Thank You For Patience</h4>
                        <div>
                            <a href="/dashboard/default" class="btn btn-info-gradien btn-lg text-light">BACK TO HOME PAGE</a>
                        </div>
                    </div>
                </div>
                {/* Maintenance end */}
            </div>
        )
    }
}


export default ComingSoon;