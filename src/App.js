import React from 'react';
import './App.css';
import DashboardLayout from "./components/dashboard-components/DashboardLayout";
import Login from "./components/login-components/Login";
import MainHomeLayout from "./components/main-home-components/MainHomeLayout";
import Register from "./components/register-components/Register";

function App() {
  return (
    < div className="App">
        <DashboardLayout />
        {/*<Login/>*/}
        {/*<MainHomeLayout />*/}
        {/*<Register/>*/}
    </div>
  );
}

export default App;
