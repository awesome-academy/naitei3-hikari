import React, {Component} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class IconMarkUp extends Component {


    closeIconContainer = () => {
        var dd = document.getElementsByClassName('icon-hover-bottom')[0].style.display = 'none';
        console.log(dd);
    }

    render() {

        if(this.props.itag != null)
        {
            document.getElementsByClassName('icon-hover-bottom')[0].style.display = 'block';
        }

        return (
            <div className="icon-hover-bottom p-fixed fa-fa-icon-show-div" >
                <div className="container-fluid">
                    <div className="row">
                        <div className="icon-popup">
                            <div className="close-icon" onClick={() => this.closeIconContainer()}>
                                <i className="icofont icofont-close"></i>
                            </div>
                            <div className="icon-first">
                                <i id="icon_main" className="fa-2x"></i>
                            </div>
                            <div className="icon-class">
                                <label className="icon-title">Class</label>
                                <span id="fclass1"></span>
                            </div>
                            <ToastContainer />
                            <div className="icon-last icon-last">
                                <label className="icon-title">Markup</label>
                                <div className="form-inline">
                                    <div className="form-group">
                                        <input type="text" className="inp-val form-control m-r-10" defaultValue={this.props.itag} id="input_copy" />
                                        <CopyToClipboard text={this.props.itag}
                                          >
                                          <button 
                                            className="btn btn-primary notification" 
                                            onClick={() => toast.success("Copied !", {
                                                position: toast.POSITION.BOTTOM_RIGHT
                                            })}
                                          >Copy text</button>
                                        </CopyToClipboard>
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

export default IconMarkUp;