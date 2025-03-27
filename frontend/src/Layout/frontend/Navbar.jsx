import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({ cartCount = 0 }) => {
  const navbarStyles = `
    .navbar {
      transition: all 0.3s ease;
      background-color: #212529 !important;
    }
    .navbar-brand {
      font-size: 1.5rem;
      color: #fff !important;
    }
    .navbar-brand span {
      color: #ffc107;
    }
    .nav-link {
      color: #fff !important;
      padding: 0.5rem 1rem !important;
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
    .nav-link:hover {
      color: #ffc107 !important;
    }
    .form-control:focus {
      border-color: #ffc107;
      box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.25);
    }
    .navbar-toggler {
      border-color: rgba(255, 255, 255, 0.1);
    }
    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.55)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
    .badge {
      position: relative;
      top: -2px;
      padding: 0.25em 0.5em;
      font-size: 0.75rem;
      background-color: #ffc107 !important;
      color: #212529 !important;
    }
  `;

  return (
    <>
      <style>{navbarStyles}</style>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">
          <span>E</span>-Shop
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/deals">
                Deals
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/new-arrivals">
                New Arrivals
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <i className="bi bi-box-arrow-in-right me-1"></i>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                <i className="bi bi-person-plus me-1"></i>
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <i className="bi bi-cart3 me-1"></i>
                {cartCount > 0 && (
                  <span className="badge">{cartCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;