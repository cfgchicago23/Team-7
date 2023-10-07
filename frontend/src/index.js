<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './App';
import Share from './Share';
import LoginForm from './pages/LoginForm';
import Resources from './pages/resource_page';
import Profile from './pages/profile_page';
import Card from './pages/Card';
=======
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
>>>>>>> 226ab94d7892019747b45fcea846720b8291e0cc

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="share" element={<Share />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="profile" element={<Profile />} />
          <Route path="card" element={<Card />} />
=======
        {/* <Route path="/" element={<Layout />}> */}
          <Route path = "/" element={<Home />} />
          <Route path = "/login" element = {<LoginForm/>}/>
          <Route path="/" element={<Layout />}>
          <Route path="/share" element={<Share />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/card" element={<Card />} />
          <Route path="/signup" element={<SignUpForm />} />


>>>>>>> 226ab94d7892019747b45fcea846720b8291e0cc
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
