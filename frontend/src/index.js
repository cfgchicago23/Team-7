import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Layout from "./Layout";
import Home from "./App";
import Share from "./Share";
import LoginForm from "./pages/LoginForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route path = "/" element={<Home />} />
          <Route path = "/login" element = {<LoginForm/>}/>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
