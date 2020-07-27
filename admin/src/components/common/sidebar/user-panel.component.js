import React, {Component} from 'react';
import { connect } from 'react-redux'
import { getUser } from '../../../services/authentication/actions'
class UserPanel extends Component {
    componentDidMount(){
        const token = localStorage.getItem("token")
        this.props.getUser(token);
    }
    render() {
        return (
            <div className="sidebar-user text-center">
                <div>
                    <img className="img-50 rounded-circle" src={require("./../../../assets/images/user/1.jpg")} alt="#" />
                </div>
                <h6 className="mt-3 f-12">{this.props.current_user.current_user != undefined && this.props.current_user.current_user.shop.name}</h6>
                <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {current_user: state.auth.user}
}
export default connect(mapStateToProps, {getUser})(UserPanel)