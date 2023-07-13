import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import Changepass from './Changepass';
import Forgotpass from './Forgotpass';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Editprofile from './Editprofile';
import Dashboard from './Dashboard';
import Imgchange from './Imgchange';
import Otp from './Otp';
import Reotp from './Reotp';
import Verifyotp from './Verifyotp';

function App() {
  return (
    <>
      <Router>
        <Link to="/Login">Login</Link>  | 
        <Link to="/Dashboard"> Dashboard</Link>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} /> 
          <Route path="/Changepass" element={<Changepass />} />
          <Route path="/Forgotpass" element={<Forgotpass />} />
          <Route path='/Editprofile' element={<Editprofile />} />
          <Route path='/Imgchange' element={<Imgchange />} />
          <Route path='/Otp' element={<Otp />} />
          <Route path='/Reotp' element={<Reotp />} />
          <Route path='/Verifyotp' element={<Verifyotp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
