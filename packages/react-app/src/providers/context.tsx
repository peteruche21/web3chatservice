import React from "react";

interface IContextProps {
  provider;
  providerIsSet;
  connect;
  openLogin;
  isConnected;
  isConnecting;
  getUser;
  logout;
}

const Web3AuthContext = React.createContext({} as IContextProps);

export default Web3AuthContext;
