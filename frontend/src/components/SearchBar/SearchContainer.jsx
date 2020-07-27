import React from 'react';
import { connect } from 'react-redux';
import SearchComponent from './SearchComponent'
import { withRouter } from 'react-router';

const msp = (state, ownProps) => {
    return {
        users: state.entities.users
    }
}
export default withRouter(connect(msp, null)(SearchComponent));