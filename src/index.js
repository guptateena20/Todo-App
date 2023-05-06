import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClientProvider, QueryClient } from "react-query"
import { Auth0Provider } from "@auth0/auth0-react";
import {ReactQueryDevtools} from 'react-query/devtools'

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
  <Auth0Provider
  domain="dev-8mjmc1j7j60rrvml.us.auth0.com"
  clientId="DefcOyEYrYwZJA2O2PuSkpUOIinsuBBo"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
    <QueryClientProvider client={queryClient}>
      <App />
      {/* <ReactQueryDevtools/> */}
    </QueryClientProvider>
  </Auth0Provider>
);

