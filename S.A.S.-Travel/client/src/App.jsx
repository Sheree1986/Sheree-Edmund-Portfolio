
import { useState, useEffect } from 'react';
import Recommendations from "./pages/Recommendations";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";
import AddPost from "./pages/AddPost";
import ViewAdminPost from "./pages/ViewAdminPost";
import AdminDashboard from "./pages/AdminDashboard";
// import RequireAuth from "./components/RequireAuth";

function App() {

  const [user, setUser] = useState(null);



  return (
    <div className="App">
     
 

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path ="/dashboard" element={ <AdminDashboard />}/>

       {/* {Protected Routes}  */}

   <Route element={<RequireAuth />} >
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<ViewAdminPost />} />
        <Route path="/post" element={<SinglePost />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/*" element={<ErrorPage />} />
      </Route>

    </Routes> 
    </div > 
  );
}

export default App;
