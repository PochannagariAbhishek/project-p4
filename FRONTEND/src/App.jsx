import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Budget from "./pages/Budget";
import History from "./pages/History";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import "./index.css"; // Ensure styles are imported

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app-container">
        {/* Floating Money Symbols */}
        <div className="money-symbol">$</div>
        <div className="money-symbol">💰</div>
        <div className="money-symbol">$</div>
        <div className="money-symbol">💵</div>
        <div className="money-symbol">$</div>
        <div className="money-symbol">💰</div>
        <div className="money-symbol">$</div>

        {/* Show Navbar only when authenticated */}
        {isAuthenticated && <Navbar />}

        {/* Define Routes */}
        <Routes>
          {!isAuthenticated ? (
            <>
              <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
              <Route path="/signup" element={<Signup onSignup={() => setIsAuthenticated(true)} />} />
              <Route path="*" element={<Navigate to="/login" />} />
              <Route path="*" element={<Navigate to="/signup" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/history" element={<History />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
