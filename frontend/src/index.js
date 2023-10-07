import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Layout from "./Layout";
import Home from "./App";
import Share from "./Share";
import LoginForm from "./pages/LoginForm";
import Resources from "./pages/resource_page";
import Profile from "./pages/profile_page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route path = "/" element={<Home />} />
          <Route path = "/login" element = {<LoginForm/>}/>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="share" element={<Share />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
