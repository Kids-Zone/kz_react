import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import {useState} from "react"
import AppContext from "./AppContext";


const Auth0ProviderWithHistory = ({ children }) => {
 const domain = process.env.REACT_APP_AUTH0_DOMAIN;
 const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
 
 const [userData, setUserData] = useState(null);
 const userMetadata = {
  userData: userData,
  setUserData,

};
 const history = useHistory();
 const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };
  return (
    <AppContext.Provider value={userMetadata}>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin+'/PostLogin'}
      onRedirectCallback={onRedirectCallback}
      audience="https://dev-mhtjevle.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      {children}
    </Auth0Provider>
    </AppContext.Provider>
  );
};

export default Auth0ProviderWithHistory;