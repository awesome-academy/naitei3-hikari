import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';
import {createNewUser, login, logout} from './actions/user_actions';
import { fetchCurrentUser } from './utils/utils'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store = configureStore(), currentUser;
  let token = localStorage.getItem("auth_token");
  if(token){
    fetchCurrentUser(token).then(user => {
      currentUser = user
        const preloadedState = {
          entities: {
            users: { [currentUser.current_user.id]: currentUser.current_user },
          },
          session: { id: currentUser.current_user.id }
        };
        store = configureStore(preloadedState);
        ReactDOM.render(<Root store={store} />, root);
  })
  }
  else {
    ReactDOM.render(<Root store={store} />, root);
  }
    // window.login = login;
    // window.logout = logout;
    
    // window.dispatch = store.dispatch;
});