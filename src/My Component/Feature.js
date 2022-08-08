import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Feature() {
  return (
    <>
      {/*======== Start Header Area======= */}
      <Header />
      {/*======== End Header Area======= */}

      {/*======== Start Banner Area======= */}
      <section id='top' className='f-banner'>
        <img src={require("./Image/hdr1.jpg")} alt="" />
        <div className="banner-inner">
          <h1 className='b-title'>app features</h1>
          <ul>
            <li><a href="#">home</a></li>
            <li>/</li>
            <li><span>app features</span></li>
          </ul>
        </div>
      </section>
      {/*======== End Banner Area======= */}

      {/*======== Start F-Adv-Feature Area======= */}
      <section className='f-adv-feature '>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h6 className='t-heading'>Advanced Feature</h6>
              <h1 className='main-heading'>We Make Things Simple And Better Collaboration</h1>
              <p>Mistaken I must explain to you expound the actual teachings how all this mistaken idea of pain was born and will give complete account the system, master-builder of human happiness and of the great explorer truth, the denouncing pleasure praising.</p>

              <ul className='f-list gy-5'>
                <li>
                  <i className="bi bi-chat-square"></i>
                  App Integration
                </li>
                <li>
                  <i className="bi bi-display"></i>
                  Fully Customizable
                </li>
                <li>
                  <i className="bi bi-display"></i>
                  High Resolution
                </li>
                <li>
                  <i className="bi bi-menu-button-wide"></i>
                  Drag And Drop
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <img className='w-100 ms-3' src={require("./Image/about.jpg")} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/*======== End F-Adv-Feature Area======= */}

      {/*======== Start F-Features Area======= */}
      <section className='f-features'>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="features-box">
                <div className="features-icon">
                  <i className="bi bi-chat-left-dots"></i>
                </div>
                <div className="features-disc">
                  <h5>real-time charts</h5>
                  <p>Utenim ad minim veniam quis nostrud exercitation minim veniam </p>
                  <a className='btn-2' href="#">read more</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="features-box">
                <div className="features-icon">
                  <i className="bi bi-globe2"></i>
                </div>
                <div className="features-disc">
                  <h5>validation and more</h5>
                  <p>Utenim ad minim veniam quis nostrud exercitation minim veniam </p>
                  <a className='btn-2' href="#">read more</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="features-box">
                <div className="features-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="features-disc">
                  <h5>form developing</h5>
                  <p>Utenim ad minim veniam quis nostrud exercitation minim veniam </p>
                  <a className='btn-2' href="#">read more</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="features-box">
                <div className="features-icon">
                  <i className="bi bi-pc-display-horizontal"></i>
                </div>
                <div className="features-disc">
                  <h5>convergence tools</h5>
                  <p>Utenim ad minim veniam quis nostrud exercitation minim veniam </p>
                  <a className='btn-2' href="#">read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*======== End F-Features Area======= */}

      {/*======== Start Footer Area======= */}
      <Footer />
      {/*======== End Footer Area======= */}

       {/*======== Start Scroll-Top Area======= */}
       <a className='scroll-top' href="#top"><i className="bi bi-arrow-up"></i></a>
        {/*======== End Scroll-Top Area======= */} 

    </>
  )
}
