
import React, { useState } from "react";
import axios from "axios";

function Hero() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // change handle state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  }

  // handlesubmit

  const handleSubmit  = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/messages",

        formData

      );

      alert(data.message);

      // clear data

      setFormData({
        name: "",
        email: "",
        message: "",
      });



    } catch (error) {
      console.log(error);

      alert(
        "Failed to send message"
      );
    }
  }

  return (

    <div className="RightMain">

      <div className="container">

        <div className="row align-items-center">

          {/* LEFT - INFO */}
          <div className="col-lg-5 col-12 mb-4 text-center text-lg-start">

            <h2>Contact Me</h2>

            <p>Feel free to reach out anytime 👇</p>

            <p>Email: nitendramishra788@gmail.com</p>

            <p>Phone: +91 9956168757</p>



          </div>


          {/* RIGHT - FORM */}
          <div className="col-lg-7 col-12">

            <form className="contact-form" onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="form-control mb-3"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="form-control mb-3"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="form-control mb-3"
                rows="5"
              ></textarea>

              <button className="btn btn-outline-light w-100">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>

  )

}

export default Hero