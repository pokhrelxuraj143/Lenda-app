import React from 'react'

export default function Footer() {
  return (
    <section className='footer'>
        <div className="footer-img">
      <img src={require("./Image/shape-5.png")} alt="" />
      </div>
        <div className="container-lg container-fluid">
            <div className="row">
                <div className="col-lg-4 col-md-6 ">
                    <div className="footer-box pe-4">
                        <div className="f-logo">
                            <img src={require("./Image/logo-footer.png")} alt="" />
                        </div>
                        <p>Affronting discretion as do is announcing. Now months esteem oppose nearer enable too six. as do nearer is announcing. </p>
                        <form>
                            <input type="text" placeholder='Enter Email...' />
                            <button className='input-btn' type='submit'>
                            <i className="bi bi-envelope"></i>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6">
                    <div className="footer-box">
                        <h3 className='footer-box-title'>quick links</h3>
                        <ul className='footer-list'>
                            <li><i className="bi bi-record-circle"></i><a href="#">overview</a></li>
                            <li><i className="bi bi-record-circle"></i><a href="#">our feature</a></li>
                            <li><i className="bi bi-record-circle"></i><a href="#">pricing table</a></li>
                            <li><i className="bi bi-record-circle"></i><a href="#">IT specialists</a></li>
                            <li><i className="bi bi-record-circle"></i><a href="#">latest news</a></li>
                            <li><i className="bi bi-record-circle"></i><a href="#">contact us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6">
                <div className="footer-box">
                        <h3 className='footer-box-title'>helful link</h3>
                        <ul className='footer-list'>
                            <li><i className="bi bi-record-circle"></i><a href="#">IT consulting</a></li>
                            <li><i className="bi bi-record-circle"></i><a href="#">cloud computing</a></li>
                            <li><i className="bi bi-record-circle"></i><a href="#">news & media</a></li>
                            <li><i className="bi bi-record-circle"></i><a href="#">cyber security</a></li>
                            <li><i className="bi bi-record-circle"></i><a href="#">IT management</a></li>
                            <li><i className="bi bi-record-circle"></i><a href="#">IT consulting</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="footer-box">
                        <h3 className='footer-box-title'>get in touch</h3>
                        <ul className='adderss-list'>
                            <li>
                                <strong>address:</strong>
                                5919 Trussville Crossings Pkwy, Birmingham AL 35235 
                            </li>
                            <li>
                                <strong>email:</strong>
                                <a href="#">9dy9e@mail.net</a>
                            </li>
                            <li>
                                <strong>phone:</strong>
                                601-594-3504 
                            </li>
                           
                        </ul>
                       
                    </div>
                </div>
            </div>

        </div>
    <div className="copyright">
        <div className="container">
            <div className="row">
            <div className="cr-content">
                <p>Copyright © 2021. All Rights Reserved <a href="#">Templatebucket</a>.</p>

                <ul>
                    <li><a href="#"><i className="fa fa-facebook px-1" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            </div>
        </div>
    </div>
    </section>
  )
}
