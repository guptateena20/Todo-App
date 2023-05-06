import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="btn-div">
      <button className="btn login_btn" onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  );
};

export default LoginButton;