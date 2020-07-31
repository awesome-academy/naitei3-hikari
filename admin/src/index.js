import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import './index.scss';


// ** Import custom components **
import store from './services/store';

// Applicaiton
import App from './components/app';
import LoginPage from './components/pages/login';
import Dashboard from './components/dashboard/ecommerce/index.component';
import UserList from './components/applications/ecommerce/user-list';
import NewUser from './components/applications/ecommerce/new-user';

class Root extends React.Component {

    render() {
        return (
        <Provider store={store}>
            <BrowserRouter basename={'/'}>
                <ScrollContext>
                    <Switch>

                    <Route path={`${process.env.PUBLIC_URL}/admin/login`} component={LoginPage} />
       

                    <App>
                        <Route path={`${process.env.PUBLIC_URL}/admin/dashboard`} component={Dashboard} />
                        <Route exact path={`${process.env.PUBLIC_URL}/admin/users`} component={UserList} />
                        <Route exact path={`${process.env.PUBLIC_URL}/admin/users/new`} component={NewUser} />
                    </App>

                    </Switch>
                </ScrollContext>
            </BrowserRouter>
        </Provider>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));


