import React from 'react';

const StudentPage = () => {
  // Inline styles
  const pageStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Set equal width for each column
    gap: '20px',
  };

  const cardStyle = {
    background: '#f9f9f9',
    padding: '20px',
    borderRadius: '5px',
    transition: 'box-shadow 0.3s ease-in-out', // Add transition for smooth effect
  };

  const cardHeaderStyle = {
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
    marginBottom: '10px',
  };

  const listStyle = {
    paddingLeft: '20px',
  };

  const paragraphStyle = {
    marginBottom: '0',
  };

  // Hover effect style
  const cardHoverStyle = {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  };

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
          <a href="view-status" style={navLinkStyle}>Scholarships Status</a>
          <a href="avail-scolarship" style={navLinkStyle}>View Scholarships</a>
          <a href="contact-out" style={rightAlignedNavLinkStyle}>Contact Us</a>

          <a href='\home' style={navLinkStyle}>Log out</a>
        </nav>
      </div>
    <div style={pageStyle}>
    
      <header style={headerStyle}>
        <h1>Welcome to the Student Scholarship Page</h1>
        <p>Here you can find information about available scholarships, eligibility criteria, application process, and more.</p>
      </header>
      
      <div style={containerStyle}>
        <div style={{ ...cardStyle, ...cardHoverStyle }}> {/* Merge cardStyle and cardHoverStyle */}
          <h2 style={cardHeaderStyle}>Available Scholarships</h2>
          <ul style={listStyle}>
            <li>Scholarship 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Scholarship 2 - Sed eget nunc vel velit placerat fringilla.</li>
            <li>Scholarship 3 - Nulla facilisi. Vivamus et massa vel justo bibendum faucibus ac vitae lectus.</li>
          </ul>
        </div>
        
        <div style={{ ...cardStyle, ...cardHoverStyle }}> {/* Merge cardStyle and cardHoverStyle */}
          <h2 style={cardHeaderStyle}>Eligibility Criteria</h2>
          <p style={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget nunc vel velit placerat fringilla.
            Nulla facilisi. Vivamus et massa vel justo bibendum faucibus ac vitae lectus. Phasellus congue sem vel
            metus feugiat, vel scelerisque quam semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Duis aliquam eros et est blandit lacinia.
          </p>
        </div>
        
        <div style={{ ...cardStyle, ...cardHoverStyle }}> {/* Merge cardStyle and cardHoverStyle */}
          <h2 style={cardHeaderStyle}>Application Process</h2>
          <p style={paragraphStyle}>
            Sed malesuada enim ut nunc accumsan, vel mollis purus finibus. Sed efficitur feugiat sapien, non
            malesuada quam efficitur ut. Sed nec erat eu justo congue elementum a ut tellus.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StudentPage;
