import React, {Component} from 'react';

// Import authService

class Language extends Component {

    render() {

        return (
            <li className="onhover-dropdown">
                <a className="txt-dark">
                    <img className="align-self-center pull-right mr-2" src={require("../../../assets/images/dashboard/translate.png")} alt="header-translate" />
                </a>
                <ul className="language-dropdown onhover-show-div p-20">
                    <li>
                        <a href="#" data-lng="en">
                            <i className="flag-icon flag-icon-ws"></i> English
                        </a>
                    </li>
                    <li>
                        <a href="#" data-lng="es">
                            <i className="flag-icon flag-icon-va"></i> Spanish
                        </a>
                    </li>
                    <li>
                        <a href="#" data-lng="pt">
                            <i className="flag-icon flag-icon-id"></i> Portuguese
                        </a>
                    </li>
                    <li>
                        <a href="#" data-lng="fr">
                            <i className="flag-icon flag-icon-fr"></i> French
                        </a>
                    </li>
                </ul>
            </li>
        );
    }
}

export default Language;