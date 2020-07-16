import React, {Component} from 'react';
import { connect } from 'react-redux'
import { getUser } from '../../../services/authentications/actions'
class UserPanel extends Component {
    componentDidMount(){
        const token = localStorage.getItem("token")
        this.props.getUser(token);
    }
    handleImage = (picture) =>{
        if(picture == null){
          return "https://lehoanglan.s3-ap-northeast-1.amazonaws.com/Hikari/images/33db51b709c04b279a1826b3bbf0faf2.png"
        }
        return picture
    }
    render() {
        console.log(this.props)
        return (
            <div className="sidebar-user text-center">
                { this.props.current_user && this.props.current_user.current_user &&
                <>
                <div>
                    <img className="img-50 rounded-circle" src={this.handleImage(this.props.current_user.current_user.picture)} alt="#" />
                </div>
                    <h6 className="mt-3 f-12">{this.props.current_user.current_user.username}</h6>
                <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                </>
    }
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {current_user: state.auth.user}
}
export default connect(mapStateToProps, {getUser})(UserPanel)