const prviderhome = () => {
  const navContainerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '10px',
  };
  
  const navMenuStyle = {
    display: 'flex',
    justifyContent: 'flex-end', // Align items to the rightmost end
  };
  
  const navLinkStyle = {
    margin: '0 10px',
    color: '#333',
    textDecoration: 'none',
  };
  
  const rightAlignedNavLinkStyle = {
    ...navLinkStyle, // Copy styles from navLinkStyle
    marginLeft: 'auto', // Use marginLeft: auto to push items to the rightmost end
  };
  
    return (
      <div>
    <div style={navContainerStyle}>
        <nav style={navMenuStyle}>
          <a href="view-sh-req" style={navLinkStyle}>Scholarships Status</a>
          <a href="post-shoclar" style={navLinkStyle}>Post Scholarships</a>
          <a href="contact-out" style={rightAlignedNavLinkStyle}>Contact Us</a>

          <a href='\home' style={navLinkStyle}>Log out</a>
        </nav>
        
      </div>

      <p>
        Welcome to Our Scholarship Provider Platform!

Dear Scholars,

We extend a warm and hearty welcome to each of you visiting our platform. Here, at [Scholarship Provider Name], we believe in the transformative power of education and the boundless potential within every scholar.

Whether you're embarking on your academic journey or seeking opportunities to further your studies, you've come to the right place. Our mission is to support and empower talented individuals like you to pursue your dreams and make a positive impact on the world.

Explore our wide range of scholarship opportunities tailored to various fields, backgrounds, and aspirations. From merit-based scholarships to those addressing specific needs and challenges, we strive to ensure that no deserving scholar is left behind.

Join our vibrant community of scholars, mentors, and partners dedicated to nurturing talent and fostering excellence. Together, let's embark on a journey of learning, growth, and success.

Once again, welcome to [Scholarship Provider Name]. Your journey to success begins here!
        </p>
      </div>
    );
  };

  export default prviderhome;