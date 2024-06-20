import React, { useState } from 'react';
import '../studRegForm.css';

const StudentRegistrationForm = () => {
    

    const handleSubmit = (event) => {
        event.preventDefault();
        // Your form submission logic here
    };

    return (
        <>
            <div className='stdregbody'>
                <h1 className="form-title">Student Registration Form</h1>
                <form className="registration-form" onSubmit={handleSubmit}>
                    <label htmlFor="fullName" className="form-label">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" className="form-input" required />

                    <label htmlFor="email" className="form-label">Email Address:</label>
                    <input type="email" id="email" name="email" className="form-input" required />

                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" id="password" name="password" className="form-input" required />

                    <label htmlFor="dob" className="form-label">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" className="form-input" required />

                    <label htmlFor="gender" className="form-label">Gender:</label>
                    <select id="gender" name="gender" className="form-select" required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                    <label htmlFor="contactNumber" className="form-label">Contact Number:</label>
                    <input type="tel" id="contactNumber" name="contactNumber" className="form-input" pattern="[0-9]{10}" required />

                    <label htmlFor="address" className="form-label">Address:</label>
                    <textarea id="address" name="address" className="form-textarea" rows="2" required></textarea>

                    <label htmlFor="parentName" className="form-label">Parent's Name:</label>
                    <input type="text" id="parentName" name="parentName" className="form-input" required />

                    <label htmlFor="parentEmail" className="form-label">Parent's Email Address:</label>
                    <input type="email" id="parentEmail" name="parentEmail" className="form-input" required />

                    <label htmlFor="parentPhone" className="form-label">Parent's Contact Number:</label>
                    <input type="tel" id="parentPhone" name="parentPhone" className="form-input" pattern="[0-9]{10}" required />

                    <label htmlFor="annualIncome" className="form-label">Annual Income:</label>
                    <input type="number" id="annualIncome" name="annualIncome" className="form-input" min="0" required />

                    <label htmlFor="incomeSource" className="form-label">Income Source:</label>
                    <input type="text" id="incomeSource" name="incomeSource" className="form-input" required />

                    <label htmlFor="currentCGPA" className="form-label">Current CGPA/Percentage:</label>
                    <input type="number" id="currentCGPA" name="currentCGPA" className="form-input" step="0.01" min="0" max="100" required />

                    <label htmlFor="activities" className="form-label">Extracurricular Activities:</label>
                    <textarea id="activities" name="activities" className="form-textarea" rows="2" required></textarea>

                    <label htmlFor="essay" className="form-label">Essay or Personal Statement:</label>
                    <textarea id="essay" name="essay" className="form-textarea" rows="2" required></textarea>

                    <button type="submit" className="submit-button">Submit</button>
                </form>
                {/* <div id="error-message" className="error-message">{errorMessage}</div> */}
            </div>
        </>
    );
};

export default StudentRegistrationForm;

// import {useState} from "react";

// export default function RegisterPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   async function register(ev) {
//     ev.preventDefault();
//     const response = await fetch('http://localhost:4000/register', {
//       method: 'POST',
//       body: JSON.stringify({username,password}),
//       headers: {'Content-Type':'application/json'},
//     });
//     if (response.status === 200) {
//       alert('registration successful');
//     } else {
//       alert('registration failed');
//     }
//   }
//   return (
//     <form className="register" onSubmit={register}>
//       <h1>Register</h1>
//       <input type="text"
//              placeholder="username"
//              value={username}
//              onChange={ev => setUsername(ev.target.value)}/>
//       <input type="password"
//              placeholder="password"
//              value={password}
//              onChange={ev => setPassword(ev.target.value)}/>
//              {/* <label htmlFor="fullName" className="form-label">Full Name:</label>
//                     <input type="text" id="fullName" name="fullName" className="form-input" required />

//                     <label htmlFor="email" className="form-label">Email Address:</label>
//                     <input type="email" id="email" name="email" className="form-input" required />

//                     <label htmlFor="password" className="form-label">Password:</label>
//                     <input type="password" id="password" name="password" className="form-input" required />

//                     <label htmlFor="dob" className="form-label">Date of Birth:</label>
//                     <input type="date" id="dob" name="dob" className="form-input" required />

//                     <label htmlFor="gender" className="form-label">Gender:</label>
//                     <select id="gender" name="gender" className="form-select" required>
//                         <option value="">Select Gender</option>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                         <option value="other">Other</option>
//                     </select>

//                     <label htmlFor="contactNumber" className="form-label">Contact Number:</label>
//                     <input type="tel" id="contactNumber" name="contactNumber" className="form-input" pattern="[0-9]{10}" required />

//                     <label htmlFor="address" className="form-label">Address:</label>
//                     <textarea id="address" name="address" className="form-textarea" rows="2" required></textarea>

//                     <label htmlFor="parentName" className="form-label">Parent's Name:</label>
//                     <input type="text" id="parentName" name="parentName" className="form-input" required />

//                     <label htmlFor="parentEmail" className="form-label">Parent's Email Address:</label>
//                     <input type="email" id="parentEmail" name="parentEmail" className="form-input" required />

//                     <label htmlFor="parentPhone" className="form-label">Parent's Contact Number:</label>
//                     <input type="tel" id="parentPhone" name="parentPhone" className="form-input" pattern="[0-9]{10}" required />

//                     <label htmlFor="annualIncome" className="form-label">Annual Income:</label>
//                     <input type="number" id="annualIncome" name="annualIncome" className="form-input" min="0" required />

//                     <label htmlFor="incomeSource" className="form-label">Income Source:</label>
//                     <input type="text" id="incomeSource" name="incomeSource" className="form-input" required />

//                     <label htmlFor="currentCGPA" className="form-label">Current CGPA/Percentage:</label>
//                     <input type="number" id="currentCGPA" name="currentCGPA" className="form-input" step="0.01" min="0" max="100" required />

//                     <label htmlFor="activities" className="form-label">Extracurricular Activities:</label>
//                     <textarea id="activities" name="activities" className="form-textarea" rows="2" required></textarea>

//                     <label htmlFor="essay" className="form-label">Essay or Personal Statement:</label>
//                     <textarea id="essay" name="essay" className="form-textarea" rows="2" required></textarea>
//  */}

//       <button className="submit-button">Register</button>
//     </form>
//   );
// }
