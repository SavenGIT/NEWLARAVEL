import React from "react";
import routes from "../../assets/routes/routes";
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import Navbar from './Navbar'; // Already fixed typo
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const MasterLayout = () => {
  return (
    <>
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <Sidebar />
          </div>
          <div id="layoutSidenav_content">
            <main>
              <Routes>
                {routes.map((route, index) => {
                  return (
                    route.component && (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        element={<route.component />}
                      />
                    )
                  );
                })}
                <Route path="" element={<Navigate to="dashboard" replace />} /> {/* Changed from '/admin' to '' and '/admin/dashboard' to 'dashboard' */}
              </Routes>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MasterLayout;