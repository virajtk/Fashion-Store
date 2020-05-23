import React from 'react';
import './App.css';
import DashboardLayout from "./components/dashboard-components/DashboardLayout";
import Login from "./components/login-components/Login";
import MainHomeLayout from "./components/main-home-components/MainHomeLayout";
import Register from "./components/register-components/Register";
import AddAccount from './components/admin-components/AddAccount';
import AddCategory from './components/dashboard-components/components/AddCategory';

function App() {
  return (
    < div className="App">
        <Register />
        {/* <Login/> */}
        {/* <MainHomeLayout /> */}
        {/* <Register/> */}
        {/* <AddAccount /> */}
        {/* <AddCategory /> */}

    </div>
  );
}

export default App;
