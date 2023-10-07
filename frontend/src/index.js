import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./App";
import Share from "./Share";
import LoginForm from "./pages/LoginForm";
import Resources from "./pages/resource_page";
import Profile from "./pages/profile_page";
import Card from "./pages/Card"
import SignUpForm from "./pages/SignUp";
import Leaderboard from "./pages/Leaderboard";
import { useState } from "react";

export default function App() {
  const [loginUser, setLoginUser] = useState('');
  const [signUpUser, setSignUpUser] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route path = "/" element={<Home />} />
          <Route path = "/login" element = {<LoginForm user2={loginUser} setUser2={setLoginUser}/>}/>
          {/* <Route path="/" element={<Layout />}> */}
          <Route path="/share" element={<Share />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/profile" element={<Profile user2={loginUser} setUser2={setLoginUser}/>} />
          <Route path="/card" element={<Card />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
