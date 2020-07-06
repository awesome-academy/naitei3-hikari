 import React from 'react';
import { connect } from 'react-redux';
import { MainBarComponent } from './MainBarComponent';
import { withRouter } from 'react-router';

export default withRouter(connect()(MainBarComponent));