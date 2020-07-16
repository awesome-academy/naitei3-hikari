import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return (
            <div>
                <footer className="main-footer">
                    <p>2018 © Universal theme by <a href="http://almsaeedstudio.com">pixelstrap</a>
                    </p>
                    <div className="pull-right hidden-xs">
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">T&C</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer