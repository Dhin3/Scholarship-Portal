import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/home';
import Login from './pages/login';
import NoPage from './pages/nppage';
import Contact from './pages/contact';
import StudentLogin from './pages/studetnlogin'; // Assuming this is a correct spelling of 'studentlogin'
import ProviderLogin from './pages/providerLogin'; // Assuming this is a correct spelling of 'providerLogin'
import StudentRegistrationForm from './pages/studRegForm';
import CollegeRegistrationForm from './pages/providerRegForm';
import NewHome from './pages/studentHome';
import ProvderHome from './pages/provderHome';
import AvailableScholarships from './pages/avliableScholar';
import ViewStatus from './pages/viewScholar';
import ScholarshipForm from './pages/postScholar';
import ScholarshipRequest from './pages/scholarpoststatus';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path="/provider-login" element={<ProviderLogin />} />
            <Route path="/student-reg" element={<StudentRegistrationForm/>}/>
            <Route path="/provider_reg" element={<CollegeRegistrationForm/>}/>
            
          </Route>

          <Route path="/new-home" element={<NewHome/>} /> 
          <Route path="/provi-home" element={<ProvderHome/>}/>
          <Route path="contact-out" element={<Contact />} />
          <Route path='/avail-scolarship' element={<AvailableScholarships/>}/>
          <Route path='/view-status' element={<ViewStatus/>}/>
          <Route path='/post-shoclar' element={<ScholarshipForm/>}/>
          <Route path='/view-sh-req' element={<ScholarshipRequest/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
