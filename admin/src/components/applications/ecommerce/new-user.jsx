import React, { Component } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  CustomInput,
} from "reactstrap";
import Breadcrumb from "../../common/breadcrumb.component";
import {
  AvForm,
  AvField,
  AvGroup,
  AvSelect,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
  AvCheckboxGroup,
  AvCheckbox,
} from "availity-reactstrap-validation";
import { addUser } from "../../../services/users/actions";
import { connect } from "react-redux";

class NewUser extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    date_of_birth: "",
    role: 0,
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props
      .addUser({ user: this.state })
      .then(() => {
        this.props.history.push("/admin/users");
      })
      .catch((err) => {
        let errorElement = document.getElementsByClassName("errors")[0];
        errorElement.style.display = "block";
        errorElement.innerHTML = String(this.props.errors);
      });
  };
  render() {
    return (
      <Col sm="12">
        <div className="card">
          <div className="card-header">
            <h5>New User</h5>
            <h6 className="errors"></h6>
          </div>
          <div className="card-body">
            <AvForm
              onSubmit={this.onSubmit}
              onInvalidSubmit={this.handleInvalidSubmit}
            >
              <div className="form-row">
                <div className="col-md-4">
                  <AvField
                    name="username"
                    label="Name"
                    type="text"
                    placeholder="Name"
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-md-4">
                  <AvField
                    name="email"
                    label="Email"
                    type="text"
                    placeholder="Email"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <AvField
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Password"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <AvField
                    name="date_of_birth"
                    label="Date of birth"
                    type="date"
                    placeholder="Date of birth"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <AvField
                    type="select"
                    name="role"
                    label="Role"
                    helpMessage="Choose role"
                    onChange={this.onChange}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </AvField>
                </div>
              </div>
              <Button color="primary">Submit</Button>
            </AvForm>
          </div>
        </div>
      </Col>
    );
  }
}

const msp = (state) => {
  return {
    errors: state.user.errors,
  };
};

export default connect(msp, { addUser })(NewUser);
