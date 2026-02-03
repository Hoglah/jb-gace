import React from "react";
import "./Contact.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact">
      <div className="overlay__div">
        <div className="container">
          <div className="flex left__container">
            <div className="contact__info__wrapper">
              <div className="flex contact__info">
                <div className="flex__center icon">
                  <MdOutlineAlternateEmail />
                </div>
                <div className="details">
                  <h4>Email us</h4>
                  <p className="muted">Fast and Reliable Support</p>
                  <p>
                    <a href="mailto:yaabirago1601@gmail.com">
                      yaabirago1601@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex contact__info">
                <div className="flex__center icon">
                  <FaLocationCrosshairs />
                </div>
                <div className="details">
                  <h4>Our Address</h4>
                  <p className="muted">Come visit us in our office</p>
                  <p>Mampong, Ashanti Region, Ghana</p>
                </div>
              </div>

              <div className="flex contact__info">
                <div className="flex__center icon">
                  <FiPhoneCall />
                </div>
                <div className="details">
                  <h4>Phone number</h4>
                  <p className="muted">Give us a call</p>
                  <p>+233 556 898 951</p>
                </div>
              </div>
            </div>
          </div>
          <form action="" className="form">
            <div className="form__top">
              <h3 className="sub__heading">Get in Touch</h3>
              <p className="muted">
                Have a project in mind or need expert advice? We're here to
                help! Reach out to our team for personalized consultations,
                inquiries, or to start your next big project today.
              </p>
            </div>
            <div className="form__middle">
              <input
                type="text"
                placeholder="Full name"
                name="fullName"
                className="control"
              />
              <input
                type="email"
                placeholder="Email address"
                name="email"
                className="control"
              />
              <input
                type="tel"
                placeholder="Phone number"
                name="phoneNumber"
                className="control"
              />
              <textarea
                name="message"
                placeholder="Your message"
                className="control"
              ></textarea>
            </div>
            <div className="form__bottom">
              <button type="button" className="btn primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
