import React from "react";
import { useAuth } from "../../context/AuthContext";
import Logo from "./Logo";
import NavigationLink from "./NavigationLink";

const Header = () => {
  const auth = useAuth();

  return (
    <header style={{ display: "flex" }}>
      <Logo />
      <div>
        {auth?.isLoggedIn ? (
          <>
            <NavigationLink
              bg="#387478"
              to="/chat"
              text="Go To Chat"
              textColor="white"
            />
            <NavigationLink
              bg="#387478"
              to="/logout"
              text="Logout"
              textColor="white"
            />
          </>
        ) : (
          <>
            <NavigationLink
              bg="#387478"
              to="/login"
              text="Login"
              textColor="white"
            />
            <NavigationLink
              bg="#387478"
              to="/signup"
              text="Signup"
              textColor="white"
            />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
