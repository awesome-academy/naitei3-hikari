import React, {Component} from 'react';
import CountUp from 'react-countup';

import Breadcrumb from '../../common/breadcrumb.component'

class EditProfile extends Component {

    render() {
        return(
            <div>
                {/*Container-fluid starts*/}
                <Breadcrumb title="Edit Profile" parent="Users" />
                {/*Container-fluid Ends*/}

                {/*Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="edit-profile">
                        <div className="row ">
                            <div className="col-xl-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">My Profile</h4>
                                        <div className="card-options">
                                            <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i
                                                className="fe fe-chevron-up"></i></a>
                                            <a href="#" className="card-options-remove" data-toggle="card-remove"><i
                                                className="fe fe-x"></i></a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row mb-2">
                                                <div className="col-auto">
                                                    <img className="img-70 rounded-circle" alt=""
                                                         src={require('../../../assets/images/user/11.png')} />
                                                </div>
                                                <div className="col">
                                                    <h4 className="mb-0">MARK JECNO</h4>
                                                    <p className="mb-4 ">DESIGNER</p>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <h6 className="form-label">Bio</h6>
                                                <textarea className="form-control" rows="5">On the other hand, we denounce with righteous indignation</textarea>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Email-Address</label>
                                                <input className="form-control" placeholder="your-email@domain.com" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Password</label>
                                                <input type="password" className="form-control" value="password" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Website</label>
                                                <input className="form-control" placeholder="http://Uplor .com" />
                                            </div>
                                            <div className="form-footer">
                                                <button className="btn btn-primary btn-block">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <form className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Edit Profile</h4>
                                        <div className="card-options">
                                            <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i
                                                className="fe fe-chevron-up"></i></a>
                                            <a href="#" className="card-options-remove" data-toggle="card-remove"><i
                                                className="fe fe-x"></i></a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="form-group">
                                                    <label className="form-label">Company</label>
                                                    <input type="text" className="form-control" placeholder="Company" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3">
                                                <div className="form-group">
                                                    <label className="form-label">Username</label>
                                                    <input type="text" className="form-control" placeholder="Username" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label">Email address</label>
                                                    <input type="email" className="form-control" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">First Name</label>
                                                    <input type="text" className="form-control" placeholder="Company" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">Last Name</label>
                                                    <input type="text" className="form-control" placeholder="Last Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="form-label">Address</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="Home Address" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-4">
                                                <div className="form-group">
                                                    <label className="form-label">City</label>
                                                    <input type="text" className="form-control" placeholder="City" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3">
                                                <div className="form-group">
                                                    <label className="form-label">Postal Code</label>
                                                    <input type="number" className="form-control"
                                                           placeholder="ZIP Code" />
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="form-group">
                                                    <label className="form-label">Country</label>
                                                    <select className="form-control btn-square">
                                                        <option value="0">--Select--</option>
                                                        <option value="1">Germany</option>
                                                        <option value="2">Canada</option>
                                                        <option value="3">Usa</option>
                                                        <option value="4">Aus</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-0">
                                                    <label className="form-label">About Me</label>
                                                    <textarea rows="3" className="form-control"
                                                              placeholder="Enter About your description"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer text-right">
                                        <button type="submit" className="btn btn-primary">Update Profile</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Add projects And Upload</h4>
                                        <div className="card-options">
                                            <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i
                                                className="fe fe-chevron-up"></i></a>
                                            <a href="#" className="card-options-remove" data-toggle="card-remove"><i
                                                className="fe fe-x"></i></a>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table card-table table-vcenter text-nowrap">
                                            <thead>
                                            <tr>
                                                <th>Project Name</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Price</th>
                                                <th></th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            <tr>
                                                <td><a href="#" className="text-inherit">Untrammelled prevents </a>
                                                </td>
                                                <td>28 May 2018</td>
                                                <td><span className="status-icon bg-success"></span> Completed</td>
                                                <td className="digits">$56,908</td>
                                                <td className="text-right">
                                                    <a className="icon" href="javascript:void(0)"></a>
                                                    <a href="javascript:void(0)" className="btn btn-primary btn-sm"><i
                                                        className="fa fa-pencil"></i> Edit</a>

                                                    <a className="icon" href="javascript:void(0)"></a>
                                                    <a href="javascript:void(0)" className="btn btn-green btn-sm"><i
                                                        className="fa fa-link"></i> Update</a>

                                                    <a className="icon" href="javascript:void(0)"></a>
                                                    <a href="javascript:void(0)" className="btn btn-danger btn-sm"><i
                                                        className="fa fa-trash"></i> Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="#" className="text-inherit">Untrammelled prevents</a></td>
                                                <td>12 June 2018</td>
                                                <td><span className="status-icon bg-danger"></span> On going</td>
                                                <td className="digits">$45,087</td>
                                                <td className="text-right">
                                                    <a className="icon" href="javascript:void(0)"></a>
                                                    <a href="javascript:void(0)" className="btn btn-primary btn-sm"><i
                                                        className="fa fa-pencil"></i> Edit</a>

                                                    <a className="icon" href="javascript:void(0)"></a>
                                                    <a href="javascript:void(0)" className="btn btn-green btn-sm"><i
                                                        className="fa fa-link"></i> Update</a>

                                                    <a className="icon" href="javascript:void(0)"></a>
                                                    <a href="javascript:void(0)" className="btn btn-danger btn-sm"><i
                                                        className="fa fa-trash"></i> Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="#" className="text-inherit">Untrammelled prevents</a></td>
                                                <td>12 July 2018</td>
                                                <td><span className="status-icon bg-warning"></span> Pending</td>
                                                <td className="digits">$60,123</td>
                                                <td className="text-right">
                                                    <a className="icon" href="javascript:void(0)"></a>
                                                    <a href="javascript:void(0)" className="btn btn-primary btn-sm"><i
                                                        className="fa fa-pencil"></i> Edit</a>

                                                    <a className="icon" href="javascript:void(0)"></a>
                                                    <a href="javascript:void(0)" className="btn btn-green btn-sm"><i
                                                        className="fa fa-link"></i> Update</a>

                                                    <a className="icon" href="javascript:void(0)"></a>
                                                    <a href="javascript:void(0)" className="btn btn-danger btn-sm"><i
                                                        className="fa fa-trash"></i> Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="#" className="text-inherit">Untrammelled prevents</a></td>
                                                <td>14 June 2018</td>
                                                <td><span className="status-icon bg-warning"></span> Pending</td>
                                                <td className="digits">$70,435</td>
                                                <td className="text-right">
                                                    <a className="icon" href="javascript:void(0)"></a>
                                                    <a href="javascript:void(0)" className="btn btn-primary btn-sm"><i
                                                        className="fa fa-pencil"></i> Edit</a>

                                                    <a className="icon" href="javascript:void(0)"></a>
                                                    <a href="javascript:void(0)" className="btn btn-green btn-sm"><i
                                                        className="fa fa-link"></i> Update</a>

                                                    <a className="icon" href="javascript:void(0)"></a>
                                                    <a href="javascript:void(0)" className="btn btn-danger btn-sm"><i
                                                        className="fa fa-trash"></i> Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="#" className="text-inherit">Untrammelled prevents</a></td>
                                                <td>25 June 2018</td>
                                                <td><span className="status-icon bg-success"></span> Completed</td>
                                                <td className="digits">$15,987</td>
                                                <td className="text-right">
                                                    <a className="icon" href="javascript:void(0)"></a>
                                                    <a href="javascript:void(0)" className="btn btn-primary btn-sm"><i
                                                        className="fa fa-pencil"></i> Edit</a>

                                                    <a className="icon" href="javascript:void(0)"></a>
                                                    <a href="javascript:void(0)" className="btn btn-green btn-sm"><i
                                                        className="fa fa-link"></i> Update</a>

                                                    <a className="icon" href="javascript:void(0)"></a>
                                                    <a href="javascript:void(0)" className="btn btn-danger btn-sm"><i
                                                        className="fa fa-trash"></i> Delete</a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default EditProfile