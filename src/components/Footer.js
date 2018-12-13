import React from 'react';

const Footer = () => (
  <footer>
    <h2>Contact Us</h2>
    <div className="footer-grid">
      <div className="contact-form">
        <form
          action="mailto:sherwoodweddecor@gmail.com"
          method="post"
          encType="text/plain"
        >
          <div className="footer-form">
            <div className="form-input">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="form-input">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="form-input">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="4"
              />
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </form>
      </div>
      <div className="address">
        <ul className="">
          <li>
            <h3 className="">
              <span className="label">Address</span>
            </h3>
            12600 Berea Rd.
            <br />
            Lakewood, OH 44111
            <br />
            United States
          </li>
          <li>
            <h3 className="">
              <span className="">Phone</span>
            </h3>
            (440) 847-9770
          </li>
          <li>
            <h3 className="">
              <span className="">Email</span>
            </h3>
            <a href="mailto:jackaldevelopment@gmail.com">
              jackaldevelopment@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
