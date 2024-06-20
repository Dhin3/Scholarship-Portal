import React from 'react';
import { Link } from 'react-router-dom';

const LoginChoice = () => {
    return (
        <div>
        <center>

        <h1>Choose Your Log IN</h1>
        </center>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height:'700px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '400px', height: '400px', backgroundColor: '#3498db', margin: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={process.env.PUBLIC_URL + '/student.png'} alt="Student" style={{ maxWidth: '60%' }} />
                    <button style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', padding: '10px 20px', marginTop: '20px' }}>
                    <Link style={{textDecoration:'None',color:'white'}} to='/student-login'>
                    Student

                    </Link>
                    </button>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '400px', height: '400px', backgroundColor: '#3498db', margin: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={process.env.PUBLIC_URL + '/provider.png'} alt="Scholarship Provider" style={{ maxWidth: '60%' }} />
                    <button style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', padding: '10px 20px', marginTop: '20px' }}>
                    <Link style={{textDecoration:'None',color:'white'}} to='/provider-login'>

                    Scholarship Provider
                    </Link>
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default LoginChoice;
