import React from 'react'

function Hero() {

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

            <form className="contact-form">

              <input
                type="text"
                placeholder="Your Name"
                className="form-control mb-3"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="form-control mb-3"
              />

              <textarea
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