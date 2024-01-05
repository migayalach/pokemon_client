// COMPONET'S
import {
  Login,
  Home,
  Favorites,
  InfoUser,
  Detail,
  About,
  Error,
} from "./views/index";
import NavBar from "./components/NavBar/NavBar";

// HOOK'S
import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY

//REDUX

// JAVASCRIP

// STYLESHEET'S
import "./styleSheets/App.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoadingPage = location.pathname === "/";
  const [access, setAccess] = useState(false);

  const accessPage = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      {!isLoadingPage && <NavBar />}
      <Routes>
        <Route path="/" element={<Login accessPage={accessPage} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

{
  /* <Route path="/favorite" element={</>}/> */
}
{
  /* <Route path="/detail" element={}/> */
}
