import React from 'react';
import '../Contact.css'; // Import your CSS file

const Contact = () => {
  return (
    <section className="contact">
      <div className="content">
        <h2>ABOUT US</h2>
        <p> Our mission is to make higher education more attainable for all students, regardless of financial circumstances. We believe that education is a powerful tool for positive change, and by investing in students' futures, we aim to create a brighter and more equitable world.

As a leading scholarship provider, we offer a wide range of scholarship programs tailored to meet the unique needs of students at every stage of their academic journey. Whether you're a high school senior preparing for college, a graduate student pursuing advanced studies, or a non-traditional student returning to school, we have scholarships designed to help you succeed.</p>
        <h2>CONTACT US</h2>
      </div>
      <div className="container">
        <div className="contactinfo">
          <div className="box">
            <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
            <div className="text">
              <h3>ADDRESS</h3>
              <p>VIT,Vellore campus,<br/>tiruvalam rd,<br/>katpadi,vellore<br/>632014</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
            <div className="text">
              <h3>PHONE NO:</h3>
              <ul>
                <li>8807877786</li>
                <li>7811818160</li>
                <li>94442 98732</li>
              </ul>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
            <div className="text">
              <h3>EMAIL</h3>
              <p>tellme@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactform">
          <form>
            <h2>SEND MESSAGE</h2>
            <div className="inputbox">
              <input type="text" name="" required />
              <span> full name </span>
            </div>
            <div className="inputbox">
              <input type="text" name="" required />
              <span> email </span>
            </div>
            <div className="inputbox">
              <textarea required></textarea>
              <span> type your message....... </span>
            </div>
            <div className="inputbox">
              <input type="submit" name="" value="SEND" />
            </div>
          </form>
        </div>
      </div>
      {/* <div className="footer">
        <ul>
          <li className="footerlink"><a href="home.html">Home</a></li>
          <li className="footerlink"><a href="login.html">Log In</a></li>
          <li className="footerlink"><a href="Registration.html">Registration</a></li>
          <li className="footerlink"><a href="news.html">NEWS</a></li>
          <li className="footerlink"><a href="map.html">MAP</a></li>
          <li className="footerlink"><a href="contact us.html">About Us</a></li>
        </ul>
      </div> */}
    </section>
  );
};

export default Contact;
