import React, { useEffect } from 'react';
import AppProvider from 'store/provider';
import wrapPageElementWithTransition from 'helpers/wrapPageElement';

// React Context in Browser
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
   useEffect(() => {
    (function(d,t) {
      var BASE_URL = "https://chatwoot-mobile-app-test.herokuapp.com";
      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src= BASE_URL + "/packs/js/sdk.js";
      s.parentNode.insertBefore(g,s);
      g.onload=function(){
        window.chatwootSDK.run({
          websiteToken: 'o8uTRTCKYcuKqWcRcNirVhdE',
          baseUrl: BASE_URL
        })
      }
    })(document,"script");
   }, []);
  
  return <AppProvider>{element}</AppProvider>;
};

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition;
