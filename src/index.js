// importing this so we can run the root method below
import ReactDOM from "react-dom/client";

import "./index.css";
// importing App.js
import App from "./App";
// stores grabs root div from html, Tells react this is our root to the react app
const root = ReactDOM.createRoot(document.getElementById("root"));
// root tells react what we need rendered. Here its the App js file
root.render(<App />);

// App is a component, in which we render in place of the root div
