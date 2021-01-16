import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = 'dev-mhtjevle.us.auth0.com'//process.env.REACT_APP_AUTH0_DOMAIN;
   const clientId = 'E3NL2XRqGqZWWyhY2QkxDjnDT5jHXVVK'//process.env.REACT_APP_AUTH0_CLIENT_ID;

  // const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  // const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const history = useHistory();
 
  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };
  return (
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

    // <Auth0Lock domain ={domain} clientId={clientId} options ={options}/>
  );
};

export default Auth0ProviderWithHistory;