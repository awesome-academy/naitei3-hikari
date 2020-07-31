import React, {Component} from 'react';
import { Table, Button } from 'reactstrap';
import Breadcrumb from '../../common/breadcrumb.component'
import { getUsers, deleteUser } from '../../../services/users/actions'
import { connect } from 'react-redux'
const styles ={
    newButton: {
        position: 'absolute',
        right: '30px',
        margin: 'auto'
    },
    table: {
        marginTop: '20px'
    }
}
class UserList extends Component {

    componentDidMount(){
        this.receiveUsers();
    }
    receiveUsers = () => {
        const token = localStorage.getItem("token")
        this.props.getUsers(token)
    }
    deleteUser = user => {
        this.props.deleteUser(user.id)
            .then(()=> {
                this.receiveUsers()
            })
            .catch(err=> {
                console.log(err)
            })
    }
    render () {
        return (
            <div>
                {/*Container-fluid starts*/}
                <Breadcrumb title="users" parent="E-commerce" />
                {/*Container-fluid Ends*/}

                {/*Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Channel List </h5>
                                    <span>The searching functionality provided by DataTables is useful for quickly search through the information in the table - however the search is global, and you may wish to present controls that search on specific columns.</span>
                                    
                                </div>
                                <div>
                                <Button className="btn-pill btn-success mr-1" style={styles.newButton} color="primary"  onClick={()=>this.props.history.push(`${process.env.PUBLIC_URL}/admin/users/new`)} >New</Button>
                                </div>
                                <div  style={styles.table} className="card-body">
                                    <div className="table-responsive user-table">
                                        <Table className="display">
                                            <thead>
                                            <tr>
                                                <th>Avatar</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Date of birth</th>
                                                <th>Role</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {this.props.users != undefined && this.props.users.map(user => {
                                                return (<tr>
                                                <td><img style={{width: "50px", height: "50px"}} src={user.picture} alt=""/>
                                                </td>
                                                <td>
                                                    <h6>{user.username}</h6>
                                                </td>
                                                <td>{user.email}</td>
                                                <td>{user.dob}</td>
                                                <td>{user.role}</td>
                                                <td>
                                                    <Button onClick={()=> this.deleteUser(user)} className="btn-pill btn-danger mr-1" color="danger">Delete</Button>
                                                    <Button className="btn-pill btn-success" color="success">Edit</Button>
                                                </td>
                                            </tr>
                                                )
                                            })}                                 
                                            </tbody>
                                        </Table>
                                    </div>
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

const mapStateToProps = state => {
    return {
        users: state.user.users
    }
}
export default connect(mapStateToProps, {getUsers, deleteUser})(UserList);