import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const handleClick = ()=>{
    localStorage.clear();
    logout({    
      returnTo: window.location.origin,
    })
  }
  return (
    <button
      className="button btn btn-info btn-danger"
      onClick={handleClick}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;