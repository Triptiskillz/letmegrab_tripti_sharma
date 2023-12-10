import React from "react";
import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";
import ProductList from "./ProductList";
import img from "../images/Coffee.png";
function Home() {
  return (
    <div>
      {/* Image Carousel Section */}
      <ImageCarousel />
      <section class="pb-4 pt-4">
        <div class="container">
          <div class="row justify-content-start align-items-center">
            <div class="col-lg-6">
              <img src={img} class="img-fluid" />
            </div>
            <div class="col-lg-6">
              <h6 className="text-secondary">Live Coffee making process.</h6>
              <h1>
                We Telecast our <br />
                Coffee Making Live
              </h1>
              <p>
                <b>We are here to listen from you deliver exellence</b>
              </p>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>
              <img class="img-fluid" src="img/signature.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <ProductList /> */}
      <section class="gallery-area section-gap">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="menu-content pb-4 col-lg-10">
              <div class="title text-center">
                <h1 class="mb-10">What kind of Coffee we serve for you</h1>
                <p>Who are in extremely love with eco friendly system.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <a href="img/g1.jpg" class="img-pop-home">
                <img
                  class="img-fluid"
                  src="https://preview.colorlib.com/theme/coffee/img/g1.jpg.webp"
                  alt=""
                />
              </a>
              <a href="img/g2.jpg" class="img-pop-home">
                <img
                  class="img-fluid"
                  src="https://preview.colorlib.com/theme/coffee/img/g2.jpg.webp"
                  alt=""
                />
              </a>
            </div>
            <div class="col-lg-8">
              <a href="img/g3.jpg" class="img-pop-home">
                <img
                  class="img-fluid"
                  src="https://preview.colorlib.com/theme/coffee/img/g3.jpg.webp"
                  alt=""
                />
              </a>
              <div class="row">
                <div class="col-lg-6">
                  <a href="img/g4.jpg" class="img-pop-home">
                    <img
                      class="img-fluid"
                      src="https://preview.colorlib.com/theme/coffee/img/g4.jpg.webp"
                      alt=""
                    />
                  </a>
                </div>
                <div class="col-lg-6">
                  <a href="img/g5.jpg" class="img-pop-home">
                    <img
                      class="img-fluid"
                      src="https://preview.colorlib.com/theme/coffee/img/g5.jpg.webp"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="review-area section-gap" id="review">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="menu-content pb-60 col-lg-10">
              <div class="title text-center">
                <h1 class="mb-10">What kind of Coffee we serve for you</h1>
                <p>Who are in extremely love with eco friendly system.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 single-review">
              <img src="img/r1.png" alt="" />
              <div class="title d-flex flex-row">
                <h4>lorem ipusm</h4>
                <div class="star ps-4 pt-1">
                  <span class="fa fa-star pe-1 checked"></span>
                  <span class="fa fa-star pe-1 checked"></span>
                  <span class="fa fa-star  pe-1checked"></span>
                  <span class="fa fa-star pe-1"></span>
                  <span class="fa fa-star pe-1"></span>
                </div>
              </div>
              <p>
                Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker. Here you can
                find the best computer accessory for your laptop, monitor,
                printer, scanner, speaker.
              </p>
            </div>
            <div class="col-lg-6 col-md-6 single-review">
              <img src="img/r2.png" alt="" />
              <div class="title d-flex flex-row">
                <h4>lorem ipusm</h4>
                <div class="star ps-4 pt-1">
                  <span class="fa fa-star pe-1 checked"></span>
                  <span class="fa fa-star pe-1 checked"></span>
                  <span class="fa fa-star pe-1"></span>
                  <span class="fa fa-star pe-1"></span>
                  <span class="fa fa-star pe-1"></span>
                </div>
              </div>
              <p>
                Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker. Here you can
                find the best computer accessory for your laptop, monitor,
                printer, scanner, speaker.
              </p>
            </div>
          </div>
          <div class="row counter-row mt-4">
            <div class="col-lg-3 col-md-6 single-counter">
              <h1 class="counter">2536</h1>
              <p>Happy Client</p>
            </div>
            <div class="col-lg-3 col-md-6 single-counter">
              <h1 class="counter">7562</h1>
              <p>Total Projects</p>
            </div>
            <div class="col-lg-3 col-md-6 single-counter">
              <h1 class="counter">2013</h1>
              <p>Cups Coffee</p>
            </div>
            <div class="col-lg-3 col-md-6 single-counter">
              <h1 class="counter">10536</h1>
              <p>Total Submitted</p>
            </div>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="menu-content mb-4  pb-4 mt-4 pt-4 col-lg-10">
            <div class="title text-center">
              <h1 class="mb-10">What kind of Coffee we serve for you</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6 single-blog">
            <img
              class="img-fluid"
              src="https://preview.colorlib.com/theme/coffee/img/b1.jpg.webp"
              alt=""
            />

            <h4 className="pt-4">Portable latest Fashion for young women</h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <p class="post-date">31st January, 2018</p>
          </div>
          <div class="col-lg-6 col-md-6 single-blog">
            <img
              class="img-fluid"
              src="https://preview.colorlib.com/theme/coffee/img/b2.jpg.webp"
              alt=""
            />
            <h4 className="pt-4">Portable latest Fashion for young women</h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <p class="post-date">31st January, 2018</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
