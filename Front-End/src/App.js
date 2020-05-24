import React from "react";
import "./App.css";
import DashboardLayout from "./components/dashboard-components/DashboardLayout";
import Login from "./components/login-components/Login";
import MainHomeLayout from "./components/main-home-components/MainHomeLayout";
import Register from "./components/register-components/Register";
import AddCategory from "./components/dashboard-components/components/AddCategory";
import DashboardLogin from "./components/admin-components/DashboardLogin";
import DashboardRegister from "./components/admin-components/DashboardRegister";
import customerLayout from "./components/Customer-Dashboard-Component/customerLayout";
import AdminUserList from "./components/admin-components/AdminUserList";
import SelectedItem from "./components/main-home-components/components/SelectedItem";
import Checkout from "./components/main-home-components/components/Checkout";
import Wishlist from "./components/main-home-components/components/Wishlist";
function App() {
  return (

    < div className="App">
        
        {/* <Login/> */}
        {/* <MainHomeLayout /> */}
        {/* <Register/> */}
        {/* <AddAccount /> */}
        {/* <AddCategory /> */}
   
      {/*<DashboardLayout />*/}
      {/*<SelectedItem />*/}
      {/*<Checkout />*/}


      {/* <Login/> */}
       <MainHomeLayout />
      {/* <Wishlist />*/}
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
