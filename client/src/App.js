import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Login />}/>
      <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />}/> 
      <Route path="/register" element={user ? <Navigate to="/" replace /> : <Register />}/> 
      <Route path="/profile/:username" element={<Profile />}/>  
    </Routes>
  );
}

export default App;
