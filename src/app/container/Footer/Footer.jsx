"use client";
import React, { useState } from "react";
import { AppWrap } from "@/app/wrapper";
import { urlFor, client } from "@/client";
import { useInView } from "react-intersection-observer";
import "./Footer.scss";

const Footer = () => {
  const { ref, inView } = useInView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text" ref={ref}>
        Take a{" "}
        <span
          className="contactme__heading"
          id={(inView && "coffee").toString()}
        >
          Coffee
        </span>{" "}
        & chat with me
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src="/images/Gmail_Logo_128px.png" alt="email" loading="lazy" />
          <a href="mailto:amr.abdelghany097@gmail.com" className="p-text">
            amr.abdelghany097@gmail.com{" "}
          </a>
        </div>
        <div className="app__footer-card">
          <img src="/images/mobile.png" alt="phone" loading="lazy" />
          <a href="tel:+1 (123) 456-7890" className="p-text">
            +20 (011) 0201-7269{" "}
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(Footer, "Contact", "base-");
