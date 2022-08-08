import React from 'react';
import Header from './Header';

//=======Banner slider======//

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation, Autoplay, } from "swiper";
import Footer from './Footer';


//=====================software slider===========//





export default function Banner() {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    
    <>

      <section className='content'>
        {/*======== Start Header Area======= */}
        <Header />
        {/*======== End Header Area======= */}

        {/*======== Start Banner Area======= */}
        <section id='top' className='banner'>
          <Swiper
            navigation={true}
            loop={true}
            // autoplay={{delay:20000}}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper">

            <SwiperSlide>
              <div className="b-img">
                <img src={require("./Image/hdr1.jpg")} alt="" />
              </div>
              <div className="banner-inner">
                <h1 className='b-title'>Digital Product</h1>
                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum </p>
                <button>Start Free trail</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="b-img">
                <img src={require("./Image/hdr2.jpg")} alt="" />
              </div>
              <div className="banner-inner">
                <h1 className='b-title'>Software Landing</h1>
                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum</p>
                <button className='btn'>Start Free trail</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        {/*======== End Banner Area======= */}

        {/*======== Start Data Area======= */}
        <section className='data'>
          <div className="container-lg container-fluid">
            <img src={require("./Image/laptop.png")} alt="" />
          </div>
        </section>
        {/*======== End Data Area======= */}

        {/*======== Start Features Area======= */}
        <section className='features container-lg container-fluid'>
          <div className="row">
            <div className="col-lg-6">
              <div className="f-box d-flex justify-content-between ">
                <div className="f-icon">
                  <i className="fa fa-cogs" aria-hidden="true"></i>
                </div>
                <div className="f-disc">
                  <h4>Optimization</h4>
                  <p>electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="f-box d-flex justify-content-between">
                <div className="f-icon">
                  <i className="fa fa-bullhorn" aria-hidden="true"></i>
                </div>
                <div className="f-disc">
                  <h4>Digital Marketing</h4>
                  <p>electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="f-box d-flex justify-content-between">
                <div className="f-icon">
                <i class="fa fa-gift" aria-hidden="true"></i>
                </div>
                <div className="f-disc">
                  <h4>Ensure Success</h4>
                  <p>electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="f-box d-flex justify-content-between">
                <div className="f-icon">
                <i class="fa fa-circle-o" aria-hidden="true"></i>
                </div>
                <div className="f-disc">
                  <h4>Desire features</h4>
                  <p>electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*======== End Features Area======= */}

        {/*======== Start Adv-Feature Area======= */}
        <section className='adv-feature '>
          <div className="s-image">
            <img src={require("./Image/shape-4.png")} alt="" />
          </div>
          <div className="container-lg container-fluid adv-feature-box">
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
        {/*======== End Adv-Feature Area======= */}

        {/*======== Start Counter Area======= */}
        <section className='counter'>

          <div className="container-lg container-fluid">
            <div className="row text-center">
              <div className="col-md-4">
                <div className="data-1">
                <img src={require("./Image/icon-3.png")} alt="" />
                  <i className="bi bi-person"></i>
                  <div className="c-disc">
                    <h3 className="timer count-title count-number" data-to="200" data-speed="1500"></h3>
                    <p>Active Users</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="data-2">
                  <i className="bi bi-chat-left-dots"></i>
                  <div className="c-disc">
                    <h3 className="timer count-title count-number" data-to="150" data-speed="1500"></h3>
                    <p>Users Reviews</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="data-3">
                  <i className="bi bi-graph-up-arrow"></i>
                  <div className="c-disc">
                    <h3 className="timer count-title count-number" data-to="630" data-speed="1500"></h3>
                    <p>Total Downloads</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*======== End Counter Area======= */}

        {/*======== Start Software Area======= */}
        <section className='software'>
          <div className="container-lg container-fluid">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3>Software Overview</h3>
                <p>Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme future. </p>
              </div>
            </div>

            <Swiper
               pagination={pagination}
              modules={[Pagination]}
              className="mySwiper">
              <SwiperSlide>
                <img src={require("./Image/01.png")} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={require("./Image/02.png")} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={require("./Image/03.png")} alt="" />
              </SwiperSlide>

            </Swiper>
          </div>
        </section>
        {/*======== End Software Area======= */}

        {/*======== Start Steps Area======= */}
        <section className='steps'>
          <div className="container">
            <h3 className='s-title text-center'>steps of our work</h3>
            <p className='s-d'>Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme future</p>
            <div className="row mt-5">
              <div className="col-lg-6 ">
                <div className="step-left text-center  gy-4 ">
                  <div className='d-flex flex-md-nowrap flex-wrap'>
                    <div className="step-box me-3">
                      <p className='step-no fw-bold'>step 1</p>
                      <i className="bi bi-globe2"></i>
                      <div className="disc">
                        <h3>Research Project</h3>
                        <p>Bumetimes furnished collected add for resources attention. Norland an minister. </p>
                      </div>
                    </div>
                    <div className="step-box ms-3 ">
                      <p className='step-no fw-bold'>step 2</p>
                      <i className="bi bi-folder2"></i>
                      <div className="disc">
                        <h3>Collection Data</h3>
                        <p>Bumetimes furnished collected add for resources attention. Norland an minister. </p>
                      </div>
                    </div>
                  </div>
                  <div className='d-flex flex-md-nowrap  flex-wrap'>
                    <div className="step-box me-3">
                      <p className='step-no fw-bold'>step 3</p>
                      <i className="fa fa-rocket p-3" aria-hidden="true"></i>
                      <div className="disc">
                        <h3>Start Project</h3>
                        <p>Bumetimes furnished collected add for resources attention. Norland an minister. </p>
                      </div>
                    </div>
                    <div className="step-box ms-3">
                      <p className='step-no fw-bold'>step 4</p>
                      <i className="bi bi-file-earmark-richtext"></i>
                      <div className="disc">
                        <h3>Project Result</h3>
                        <p>Bumetimes furnished collected add for resources attention. Norland an minister. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="step-right">
                  <h1>you are few step away to achieve your goal</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore nemo commodi nisi nesciunt in harum accusantium, alias atque expedita placeat! Necessitatibus illum est vel, quia modi, doloremque adipisci fugiat quaerat? </p>
                  <img src={require("./Image/step-2.JPG")} alt="" />
                </div>
              </div>
            </div>

          </div>
        </section>
        {/*======== End Steps Area======= */}

        {/*======== Start Feedback Area======= */}
        <section className='feedback'>
          <div className="container-lg container-fluid">
            <h3 className='f-title'>Client feedback</h3>
            <p className='f-d'>Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme future.</p>
            <div className="row d-flex justify-content-between align-items-center">

              <div className="col-lg-6 f-left">
                <img src={require("./Image/review.jpg")} alt="" />
              </div>
              <div className="col-lg-6 f-right">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                      <div className="right-box">
                        <div className="rbox">
                          <img src={require("./Image/qoute.png")} alt="" />
                        </div>
                        <div className="dis">
                          <p>For 50 years, WWF has been protecting the future of nature. The world's leading WWF works in 100 countries supported million members.</p>
                          <div className="client d-flex justify-content-start align-items-center">
                            <img src={require("./Image/user-2-s.png")} alt="" />
                            <div className="details">
                              <h6 className='name'>Devin hamilton</h6>
                              <span>Client</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="15000">
                      <div className="right-box">
                        <div className="rbox">
                          <img src={require("./Image/qoute.png")} alt="" />
                        </div>
                        <div className="dis">
                          <p>For 50 years, WWF has been protecting the future of nature. The world's leading WWF works in 100 countries supported million members.</p>
                          <div className="client d-flex justify-content-start align-items-center">
                            <img src={require("./Image/user-1-s.png")} alt="" />
                            <div className="details">
                              <h6 className='name'>Lucille goodwin</h6>
                              <span>Client</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="15000">
                      <div className="right-box">
                        <div className="rbox">
                          <img src={require("./Image/qoute.png")} alt="" />
                        </div>
                        <div className="dis">
                          <p>For 50 years, WWF has been protecting the future of nature. The world's leading WWF works in 100 countries supported million members.</p>
                          <div className="client d-flex justify-content-start align-items-center">
                            <img src={require("./Image/user-3-s.png")} alt="" />
                            <div className="details">
                              <h6 className='name'>Ira crawford</h6>
                              <span>Client</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        {/*======== End Feedback Area======= */}

        {/*======== Start Pricing Area======= */}
        <section className='pricing'>
          <div className="container-lg container-fluid">
            <h3 className='p-title'>pricing table</h3>
            <p className='p-dis'> Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme future.</p>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className='price-box'>
                  <div className="quality">
                    <p>basic</p>
                  </div>
                  <div className="price">
                    <h4><span>$</span>130</h4>
                  </div>
                  <h6 className='p-head'>per month</h6>
                  <ul className='p-details p-0'>
                    <li>Business Analyzing</li>
                    <li>24/7 Tech Suport</li>
                    <li>Operational Excellence</li>
                    <li>Knowledge Management</li>
                    <li>Business Idea Ready</li>
                    <li>10 Database</li>
                    <li>Customer Support</li>
                  </ul>
                  <button className='p-btn'>purchase</button>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 ">
                <div className='price-box'>
                  <div className="quality">
                    <p>basic</p>
                  </div>
                  <div className="price">
                    <h4><span>$</span>130</h4>
                  </div>
                  <h6 className='p-head'>per month</h6>
                  <ul className='p-details p-0'>
                    <li>Business Analyzing</li>
                    <li>24/7 Tech Suport</li>
                    <li>Operational Excellence</li>
                    <li>Knowledge Management</li>
                    <li>Business Idea Ready</li>
                    <li>10 Database</li>
                    <li>Customer Support</li>
                  </ul>
                  <button className='p-btn'>purchase</button>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className='price-box'>
                  <div className="quality">
                    <p>basic</p>
                  </div>
                  <div className="price">
                    <h4><span>$</span>130</h4>
                  </div>
                  <h6 className='p-head'>per month</h6>
                  <ul className='p-details p-0'>
                    <li>Business Analyzing</li>
                    <li>24/7 Tech Suport</li>
                    <li>Operational Excellence</li>
                    <li>Knowledge Management</li>
                    <li>Business Idea Ready</li>
                    <li>10 Database</li>
                    <li>Customer Support</li>
                  </ul>
                  <button className='p-btn'>purchase</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*======== End Pricing Area======= */}

        {/*======== Start Contact-us Area======= */}
        <section className='contact-us'>
          <div className="container-lg container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-box">
                  <h1 className='c-title'>We'd love to hear from you</h1>
                  <div className="adress-box d-flex justify-content-start align-items-center">
                    <div className="adr-icon">
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <div className="adr-detail">
                      <h5>Office Address</h5>
                      <p>3812 Lena Lane City Jackson Mississippi</p>
                    </div>
                  </div>
                  <div className="adress-box d-flex justify-content-start align-items-center">
                    <div className="adr-icon">
                      <i className="bi bi-telephone-outbound"></i>
                    </div>
                    <div className="adr-detail">
                      <h5>phone number</h5>
                      <p>601-594-3504 </p>
                    </div>
                  </div>
                  <div className="adress-box d-flex justify-content-start align-items-center">
                    <div className="adr-icon">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div className="adr-detail">
                      <h5>email</h5>
                      <p>4cfdx9dy9e@temporary-mail.net</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-form">
                  <div className="c-detail">
                  <div className="mb-3">
                    <input type="text" className="form-control px-3" id="exampleFormControlInput1" placeholder="your full name*"/>
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control px-3" id="exampleFormControlInput1" placeholder="your email address"/>
                  </div>
                  <div className="mb-3">
                    <input type="num" className="form-control px-3" id="exampleFormControlInput1" placeholder="phone number"/>
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control px-3" id="exampleFormControlInput1" placeholder="your website link"/>
                  </div>
                  </div>
                  <div className="mb-3 ">
                    <input type="text" className="form-control sub px-3" id="exampleFormControlInput1" placeholder="subject...."/>
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control tx-area px-3" id="exampleFormControlTextarea1" placeholder='your message...' rows="5"></textarea>
                  </div>
                  <button id='submit' className='submit-btn'>send message <i className="bi bi-chevron-right"></i></button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*======== End Contact-us Area======= */}

        {/*======== Start FAQ Area======= */}
        <section className='FAQ'>
        <div className="container-lg container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="faq-box">
                <div className="box d-flex justify-content-between">
                  <p>1. How much it will cost For Web Design?</p>
                  <i className="bi bi-plus"></i>
                </div>
                <div className="box d-flex justify-content-between">
                  <p>2. How long does it takes to complete the Web Design?</p>
                  <i className="bi bi-plus"></i>
                </div>
                <div className="box d-flex justify-content-between">
                  <p>3. How should I proceed to engage your web design services?</p>
                  <i className="bi bi-plus"></i>
                </div>
                <div className="box d-flex justify-content-between">
                  <p>4. What if I want to customize additional function for my website?</p>
                  <i className="bi bi-plus"></i>
                </div>
                <div className="box d-flex justify-content-between">
                  <p>5. What if I want additional section for my website?</p>
                  <i className="bi bi-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
            <div className="faq-box">
                <div className="box d-flex justify-content-between">
                  <p>6. How much it will cost For Web Design?</p>
                  <i className="bi bi-plus"></i>
                </div>
                <div className="box d-flex justify-content-between">
                  <p>7. How long does it takes to complete the Web Design?</p>
                  <i className="bi bi-plus"></i>
                </div>
                <div className="box d-flex justify-content-between">
                  <p>8. How should I proceed to engage your web design services?</p>
                  <i className="bi bi-plus"></i>
                </div>
                <div className="box d-flex justify-content-between">
                  <p>9. What if I want to customize additional function for my website?</p>
                  <i className="bi bi-plus"></i>
                </div>
                <div className="box d-flex justify-content-between">
                  <p>10. What if I want additional section for my website?</p>
                  <i className="bi bi-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        {/*======== End FAQ Area======= */}

        {/*======== Start Footer Area======= */}
          <Footer/>
        {/*======== End Footer Area======= */}   

      </section>

       {/*======== Start Scroll-Top Area======= */}
       <a className='scroll-top' href="#top"><i className="bi bi-arrow-up"></i></a>
        {/*======== End Scroll-Top Area======= */} 
    </>
  )
}
