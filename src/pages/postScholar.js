import React from 'react';

const ScholarshipForm = () => {
    const containerStyle = {
        maxWidth: '600px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    };

    const h1Style = {
        textAlign: 'center',
    };

    const formGroupStyle = {
        marginBottom: '20px',
    };

    const labelStyle = {
        display: 'block',
        fontWeight: 'bold',
        marginBottom: '5px',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
    };

    const radioStyle = {
        marginRight: '10px',
    };

    const formGroupInlineStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
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
        <div style={navContainerStyle}>
        <nav style={navMenuStyle}>
          <a href="view-sh-req" style={navLinkStyle}>Scholarships Status</a>
          <a href="post-shoclar" style={navLinkStyle}>Post Scholarships</a>
          <a href="contact-out" style={rightAlignedNavLinkStyle}>Contact Us</a>

          <a href='\home' style={navLinkStyle}>Log out</a>
        </nav>
      </div>
        
        <div style={containerStyle}>
            <h1 style={h1Style}> SCHOLARSHIP PROVIDER</h1>
            <form action="#" method="post">
                <div style={formGroupStyle}>
                    <label style={labelStyle} htmlFor="file">File Input:</label>
                    <input style={inputStyle} type="file" id="file" name="file" />
                </div>
                <div style={formGroupStyle}>
                    <label style={labelStyle} htmlFor="number1">Scholarship Name:</label>
                    <input style={inputStyle} type="text" id="number1" name="number1" />
                </div>
                <div style={formGroupStyle}>
                    <label style={labelStyle} htmlFor="number2">Scholarship Amount:</label>
                    <input style={inputStyle} type="number" id="number2" name="number2" />
                </div>
                <div style={formGroupStyle}>
                    <label style={labelStyle} htmlFor="number3">SSLC Percentage:</label>
                    <input style={inputStyle} type="number" id="number3" name="number3" />
                </div>
                <div style={formGroupStyle}>
                    <label style={labelStyle} htmlFor="number4">HSC Percentage:</label>
                    <input style={inputStyle} type="number" id="number4" name="number4" />
                </div>

                <div style={formGroupInlineStyle}>
                    <label style={labelStyle}>Gender:</label>
                    <input style={radioStyle} type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="male">Male</label>
                    <input style={radioStyle} type="radio" id="female" name="gender" value="female" />
                    <label htmlFor="female">Female</label>
                    <input style={radioStyle} type="radio" id="any" name="gender" value="any" />
                    <label htmlFor="any">Any</label>
                </div>

                <div style={formGroupInlineStyle}>
                    <label style={labelStyle}>Education:</label>
                    <input style={radioStyle} type="radio" id="ug" name="education" value="UG" />
                    <label htmlFor="ug">UG</label>
                    <input style={radioStyle} type="radio" id="pg" name="education" value="PG" />
                    <label htmlFor="pg">PG</label>
                    <input style={radioStyle} type="radio" id="anyedu" name="education" value="any" />
                    <label htmlFor="anyedu">Any</label>
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle} htmlFor="caste">Caste:</label>
                    <select style={inputStyle} id="caste" name="caste">
                        <option value="caste1">OC</option>
                        <option value="caste2">BC</option>
                        <option value="caste3">MBC</option>
                        <option value="caste4">SC</option>
                    </select>
                </div>
                <button style={buttonStyle} type="submit">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default ScholarshipForm;
