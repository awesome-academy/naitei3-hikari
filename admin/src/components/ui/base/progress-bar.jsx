import React, {Component} from 'react';
import { Progress } from 'reactstrap';

// import Custom Componenets
import Breadcrumb from '../../common/breadcrumb.component';

class ProgressBaar extends Component {
    render() {

        return (
            <div>
                <Breadcrumb title="Progress Bar" parent="Base" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Basic Progress Bars</h5>
                                    <span>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</span>
                                </div>
                                <div className="card-body progress-showcase row">
                                    <div className="col">
                                        <Progress  color="primary" value={2 * 5}/>
                                        <Progress color="secondary" value="25" />
                                        <Progress color="success" value={50} />
                                        <Progress color="info" value={75} />
                                        <Progress color="warning" value="100" />
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header">
                                    <h5>Small Progress Bars</h5>
                                    <span>Use <code> .sm-progress-bar</code>class to change progress size to small:</span>
                                </div>
                                <div className="card-body progress-showcase row ">
                                    <div className="col">
                                        <Progress className="sm-progress-bar" value={2 * 5} />
                                        <Progress className="sm-progress-bar" color="primary" value="25" />
                                        <Progress className="sm-progress-bar" color="secondary" value={50} />
                                        <Progress className="sm-progress-bar" color="success" value={75} />
                                        <Progress className="sm-progress-bar" color="info" value="100" />
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header">
                                    <h5>Large Progress Bars</h5>
                                    <span>Use <code> .lg-progress-bar</code>class to change progress size to small:</span>
                                </div>
                                <div className="card-body progress-showcase row">
                                    <div className="col">
                                        <Progress className="lg-progress-bar" color="primary" value="25" />
                                        <Progress className="lg-progress-bar" color="secondary" value={50} />
                                        <Progress className="lg-progress-bar" color="success" value={75} />
                                        <Progress className="lg-progress-bar" color="info" value="100" />
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header">
                                    <h5>Custom Height Progress Bars</h5>
                                    <span>Set a height value on the <code>.progress-bar</code>, so if you change that value the outer <code>.progress </code> will automatically resize accordingly.</span>
                                </div>
                                <div className="card-body progress-showcase row">
                                    <div className="col">
                                        <Progress className="progress" style={{height: '1px'}} color="primary" value="25" />
                                        <Progress className="progress" style={{height: '5px'}} color="secondary" value={50} />
                                        <Progress className="progress" style={{height: '11px'}} color="success" value={75} />
                                        <Progress className="progress" style={{height: '19px'}} color="info" value="100" />
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header">
                                    <h5>Progress Bars states</h5>
                                    <span>Use state utility classes to change the appearance of individual progress bars.</span>
                                </div>
                                <div className="card-body progress-showcase row">
                                    <div className="col">
                                        <Progress className="progress" color="primary" value="25" />
                                        <Progress className="progress" color="secondary" value={50} />
                                        <Progress className="progress" color="success" value={75} />
                                        <Progress className="progress" color="info" value="100" />
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header">
                                    <h5>Multiple bars</h5>
                                    <span>Include multiple progress bars in a progress component if you need.</span>
                                </div>
                                <div className="card-body progress-showcase row">
                                    <div className="col">
                                        <Progress multi>
                                            <Progress bar color="primary" value="30" />
                                            <Progress bar color="secondary" value="20" />
                                            <Progress bar color="success" value="15" />
                                        </Progress>
                                        <Progress multi>
                                            <Progress bar color="primary" value="15" />
                                            <Progress bar color="secondary" value="30" />
                                            <Progress bar color="success" value="20" />
                                            <Progress bar color="info" value="15" />
                                            <Progress bar color="warning" value="15" />
                                            <Progress bar color="danger" value="5" />
                                            <Progress bar color="primary" value="10" />
                                            <Progress bar color="light" value="8" />
                                        </Progress>

                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header">
                                    <h5>Progress Bars Striped</h5>
                                    <span>Add <code>striped</code> to apply a stripe via CSS gradient over the progress bar’s background color.</span>
                                </div>
                                <div className="card-body progress-showcase row">
                                    <div className="col">
                                        <Progress striped color="primary" value={2 * 5} />
                                        <Progress striped color="secondary" value={25} />
                                        <Progress striped color="success" value={50} />
                                        <Progress striped color="info" value={75} />
                                        <Progress striped color="warning" value={100} />
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header">
                                    <h5>Progress Bars animated</h5>
                                    <span>The striped gradient can also be animated. Add <code>animated</code> to animate the stripes right to left via CSS3 animations.</span>
                                </div>
                                <div className="card-body progress-showcase row">
                                    <div className="col">
                                        <Progress animated color="primary" value={2 * 5} />
                                        <Progress animated color="secondary" value={25} />
                                        <Progress animated color="success" value={50} />
                                        <Progress animated color="info" value={75} />
                                        <Progress animated color="warning" value={100} />
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header">
                                    <h5>Multiple bars / Stacked</h5>
                                    <span>The striped gradient can also be animated. Add <code>animated</code> to animate the stripes right to left via CSS3 animations.</span>
                                </div>
                                <div className="card-body progress-showcase row">
                                    <div className="col">
                                        <div className="text-center">Plain</div>
                                        <Progress multi>
                                            <Progress bar value="15" />
                                            <Progress bar color="primary" value="20" />
                                            <Progress bar color="secondary" value="25" />
                                            <Progress bar color="success" value="20" />
                                            <Progress bar color="info" value="15" />
                                        </Progress>
                                        <div className="text-center">With Labels</div>
                                        <Progress multi>
                                            <Progress bar color="primary" value="15">Meh</Progress>
                                            <Progress bar color="secondary" value="35">Wow!</Progress>
                                            <Progress bar color="success" value="25">25%</Progress>
                                            <Progress bar color="info" value="25">LOOK OUT!!</Progress>
                                        </Progress>
                                        <div className="text-center">Stripes and Animations</div>
                                        <Progress multi>
                                            <Progress bar striped color="primary" value="15">Stripes</Progress>
                                            <Progress bar animated color="success" value="30">Animated</Progress>
                                            <Progress bar color="info" value="25">Plain</Progress>
                                        </Progress>
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


export default ProgressBaar;