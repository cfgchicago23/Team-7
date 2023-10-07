import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./App";
import Share from "./Share";
import Resources from "./pages/resource_page";
import Profile from "./pages/profile_page";
import Card from "./pages/Card"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="share" element={<Share />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="profile" element={<Profile />} />
          <Route path="card" element={<Card />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
