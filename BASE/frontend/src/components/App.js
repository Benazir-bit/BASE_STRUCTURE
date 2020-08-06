import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import store from "../store";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { connect } from "react-redux";
import { loadUser } from "../actions/auth";



import PrivateRoute from './Auth/PrivateRoute'
import Login from './Pages/Login/Login'
import AddForm from './Pages/AddForm/AddForm'
class App extends Component {


  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {

    let appRoutes = (
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/" component={AddForm} />
      </Switch>
    );


    return (
      <Router>
        {appRoutes}

      </Router>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(App);
