import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function Header() {

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-lg container-fluid">
          <Link className="navbar-brand" to="/"><img className='logo1' src={require("./Image/logo-white.png")} alt="" /><img className='logo2' src={require("./Image/logo.png")} alt=""/> </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Home
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Home Verson 1</a></li>
                  <li><a className="dropdown-item" href="#">Home Verson 2</a></li>
                  <li><a className="dropdown-item" href="#">One Page Verson</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/overview" >Overview</Link>
               
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/feature">Feature</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/price">Pricing</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blog
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/blog">Blog</Link></li>
                  <li><a className="dropdown-item" href="#">Blog Right Sidebar</a></li>
                  <li><a className="dropdown-item" href="#">Blog Left Sidebar</a></li>
                  <li><a className='dropdown-item' href="#">Blog Single</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
