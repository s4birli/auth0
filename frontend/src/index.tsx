import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN ?? "";
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID ?? "";
const providerConfig = {
  domain: domain,
  clientId: clientId,
  authorizationParams: {
    redirect_uri: window.location.origin,
    cacheLocation: "localstorage",
    useRefreshTokens: true,
  },
};
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider {...providerConfig}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
