// import "./App.css";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { logout } from "./features/userSlice";

const App = () => {
  const dispatch = useDispatch();
  return (
    <div className="dark">
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
