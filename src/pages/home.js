import React from "react";
import Slideshow from "./slideshow";
function Home() {
    const images = [
      '	https://scholarships.gov.in/public/Content/img/slider9.jpg',
        'https://scholarships.gov.in/public/Content/img/slider5.jpg',
        'https://scholarships.gov.in/public/Content/img/slider4.jpg'
      // Add more image URLs here
    ];

    return (
        <div class="scholar-title">
        <div class="entry">
        <Slideshow images={images} />
        </div>

        <div class="entry">
          The process
        </div>
        <center>

        <h1>About Scholarships</h1>
        </center>
        
        <div className="post">
          <img src="https://marketplace.canva.com/l8-QQ/MAEcfSl8-QQ/1/tl/canva-MAEcfSl8-QQ.jpg" alt=""></img>
          <p>platform for all the scholarship schemes offered by various departments of the state. This portal envisage to provide an end-to-end solution for all the scholarship schemes starting from online student registration, verifications and disposal of application online, sanction and disbursal of various scholarships to the students through Direct Benefit Transfer (DBT). This portal aims to provide a simplified and transparent system for faster & effective disposal of the scholarship applications and delivery of funds directly into beneficiaries account without any hassles. The portal facilitates a common portal for all the stakeholders like students, colleges / institutions, welfare departments, etc. for various Scholarships schemes of Central and State Governments..</p>
        </div>
        </div>
    );
  };
  export default Home;
  