import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './reset.css' 
import 'lib-flexible'; 
import setRem from './utils/setRem'
const basename = process.env.PUBLIC_URL;
setRem()
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
    <App />
    </BrowserRouter>
    
   
  </React.StrictMode>
);