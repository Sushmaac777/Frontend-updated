
import React from "react";
import {createRoot} from "react-dom/client";
import App from './App';

/*ReactDOM.render(<App />,document.getElementById('root'));*/
const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(<App />);