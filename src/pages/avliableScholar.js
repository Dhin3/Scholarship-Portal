import React from 'react';

const AvailableScholarships = () => {
  // Define inline styles for container, card, header, list, and button
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '20px',
  };

  const cardStyle = {
    width: '30%',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    backgroundColor: '#fff',
    marginBottom: '20px',
  };

  const cardHeaderStyle = {
    fontSize: '1.5rem',
    marginBottom: '10px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
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
<nav style={navMenuStyle}>
          <a href="view-sh-req" style={navLinkStyle}>Scholarships Status</a>
          <a href="post-shoclar" style={navLinkStyle}>View Scholarships</a>
          <a href="contact-out" style={rightAlignedNavLinkStyle}>Contact Us</a>
          <a href='\home' style={navLinkStyle}>Log out</a>
        </nav>
    <div style={containerStyle}>
      {[...Array(6)].map((_, index) => (
        <div key={index} style={cardStyle}>
          <h2 style={cardHeaderStyle}>Scholarship {index + 1}</h2>
          <ul style={listStyle}>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Sed eget nunc vel velit placerat fringilla.</li>
            <li>Nulla facilisi. Vivamus et massa vel justo bibendum faucibus ac vitae lectus.</li>
          </ul>
          <button style={buttonStyle}>Apply</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default AvailableScholarships;
