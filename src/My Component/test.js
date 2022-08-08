<div className="col-md-6 f-right">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">           
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="1000">               
                    <div className="right-box">
                            <div className="col pbox">
                                <img src={require("./Image/qoute.png")} alt="" />
                            </div>
                    <div className="border1"></div>
                        
                            <div className="col">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, sunt! Illum possimus autem, voluptatibus natus est consequatur cum. Necessitatibus fugiat, amet debitis quibusdam mollitia ex explicabo dolore. Ipsum, placeat est.</p>
                            </div>
                     
                    </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                    <div className="right-box">
                        
                            <div className="col pbox">
                            <img src={require("./Image/qoute.png")} alt="" />
                            </div>
                       
                    <div className="border1"></div>
                        
                            <div className="col">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, sunt! Illum possimus autem, voluptatibus natus est consequatur cum. Necessitatibus fugiat, amet debitis quibusdam mollitia ex explicabo dolore. Ipsum, placeat est.</p>
                            </div>
                        
                    </div>
              </div>
              <div className="carousel-item">                
                    <div className="right-box">
                        
                            <div className="col pbox">
                            <img src={require("./Image/qoute.png")} alt="" />
                            </div>
                        
                    <div className="border1"></div>
                        
                            <div className="col">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, sunt! Illum possimus autem, voluptatibus natus est consequatur cum. Necessitatibus fugiat, amet debitis quibusdam mollitia ex explicabo dolore. Ipsum, placeat est.</p>
                            </div>
                        
                    </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
            </div>

            

// import React, { useState } from 'react'
// import { Link } from "react-router-dom";

export default function Header() {
  const [abc, xyz] = useState({
    display: "none"
  })
  function show() {
    if (abc.display === "none") {
      xyz({ display: "block" })
    }
    else {
      xyz({ display: "none" })
    }
  }
  
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
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
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item o-list" onClick={show}>
                <Link className="nav-link" to="/overview" >Overview</Link>
                <ul className="listitem" style={abc}>
                  <li>Hii</li>
                  <li>Hello</li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/feature">Feature</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blog
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
