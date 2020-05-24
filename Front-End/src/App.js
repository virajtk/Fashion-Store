import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import DashboardLayout from "./components/dashboard-components/DashboardLayout";
import store from "./store";
import PrivateRoute from "./components/private-route/PrivateRoute";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import { connect } from "react-redux";

import AddCategory from "./components/dashboard-components/components/AddCategory";
import DashboardLogin from "./components/admin-components/DashboardLogin";
import DashboardRegister from "./components/admin-components/DashboardRegister";
import customerLayout from "./components/Customer-Dashboard-Component/customerLayout";
import AdminUserList from "./components/admin-components/AdminUserList";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
function App() {
  return (

      <Provider store={store}>

        <Router>
            <div className="App">
                <Switch>
        <Route exact path="/register" component={Register} />
        <Route  exact path="/login" component={Login} />
                </Switch>
        {/* <Login/> */}

        {<Register/> }
        {/* <AddAccount /> */}
        {/* <AddCategory /> */}

      {/*<DashboardLayout />*/}
      {/*<SelectedItem />*/}
      {/*<Checkout />*/}



      {/* <Wishlist />*/}

      {/* <Register/>*/}
      {/* <AddAccount /> */}
      {/* <AdminUserList /> */}
      {/* <AddCategory /> */}
      {/*<DashboardLogin/>*/}
      {/* <DashboardRegister/> */}
      {/*<customerLayout />*/}
      {/*<DetailProductPage/>*/}
      {/*<Route exact path ="/product/:productId" component={Auth(DetailProductPage, null)},*/}
            </div>
        </Router>

      </Provider>


  );
}

export default App;
