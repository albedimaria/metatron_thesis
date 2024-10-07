// import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
import { App } from "./App";
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Suspense fallback={null}>
            <App />
        </Suspense>
    </React.StrictMode>
);