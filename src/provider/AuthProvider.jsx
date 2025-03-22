import React from "react";
import { AuthContext } from "../contexts/AuthContext";

const AuthProvider = ({ children }) => {
  return <AuthContext value={{ name: "Numan" }}>{children}</AuthContext>;
};

export default AuthProvider;
