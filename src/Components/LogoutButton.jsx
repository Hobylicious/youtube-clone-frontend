import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const LogoutButton = () => {
  const { logout, user } = useAuth0();

  return (
    <button className="btn btn-danger btn-block "onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out {user.name}
    </button>
  );
};

export default LogoutButton;