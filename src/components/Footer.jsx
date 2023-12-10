import React from "react";
import { Link } from "react-router-dom";

// Footer component for displaying the website footer
function Footer() {
  return (
    <footer className="footer-area section-gap">
      <div className="container">
        <div className="row">
          {/* About Us Section */}
          <div className="col-lg-5 col-md-6 mt-4 col-sm-6">
            <div className="single-footer-widget">
              <h6>About Us</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="col-lg-5 mt-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>Newsletter</h6>
              <p>Stay updated with our latest news</p>
              <div className="" id="mc_embed_signup">
                <form
                  target="_blank"
                  noValidate={true}
                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                  method="get"
                  className="form-inline"
                >
                  <input
                    className="form-control"
                    name="EMAIL"
                    placeholder="Enter Email"
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "Enter Email")}
                    required=""
                    type="email"
                  />
                  <button className="click-btn btn btn-default">
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div className="info pt-4"></div>
                </form>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="col-lg-2 col-md-6 mt-4 col-sm-6 social-widget">
            <div className="single-footer-widget">
              <h6>Follow Us</h6>
              <p>Let us be social</p>
              <div className="footer-social d-flex align-items-center">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-dribbble"></i>
                <i className="fa fa-behance"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
