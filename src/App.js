import React from "react";

import './App.css'

import NavHomeComponent from "./components/NavHomeComponent";
import HomePage from "./pages/HomePage";
import FooterComponent from "./components/FooterComponent";


function App() {
    return (
        <>

            <div className="main">

                <NavHomeComponent />

                <div className="content">
                    <HomePage />
                </div>

                <FooterComponent />

            </div>

        </>
    );
}

export default App;
