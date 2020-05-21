import React from "react";
import "./App.css";
import DashboardLayout from "./components/dashboard-components/DashboardLayout";
import "toastr";
import Login from "./components/login-components/Login";
import MainHomeLayout from "./components/main-home-components/MainHomeLayout";
import Register from "./components/register-components/Register";
import AddAccount from "./components/admin-components/AddAccount";
import AddCategory from "./components/dashboard-components/components/AddCategory";

import DashboardLogin from "./components/admin-components/DashboardLogin";
import DashboardRegister from "./components/admin-components/DashboardRegister";

import customerLayout from "./components/Customer-Dashboard-Component/customerLayout";
import AdminUserList from "./components/admin-components/AdminUserList";

function App() {
  return (
    <div className="App">
      <DashboardLayout />

      {/* <Login/> */}
      {/* <MainHomeLayout /> */}
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
  );
}

export default App;
