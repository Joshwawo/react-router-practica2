import React from "react";
import { useNavigate,  Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>

      <button onClick={handleClick}>cerrar Sesion</button>
      <br />
      <br />
      <br />
      <br />
      <Link to='welcome'>Say welcome</Link>
      <br />

      <Link to='bye'>Say bye</Link>
      <Outlet/>
       
    </div>
  );
};

export default DashBoard;
