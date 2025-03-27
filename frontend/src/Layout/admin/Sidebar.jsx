import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () =>{
    return(
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        
                        <Link className="nav-link" to="/admin/dashboard">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Dashboard
                        </Link>
                        <Link className="nav-link" to="/admin/profile">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Profile
                        </Link>
                        
                        <Link className="nav-link collapsed" to="/admin" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                            Layouts
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </Link>
                        <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                        </div>
                        <Link className="nav-link collapsed" to="/admin" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                            <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                            Pages
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </Link>
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    Start Bootstrap
                </div>
            </nav>

    );
}
export default Sidebar;