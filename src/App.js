import React from "react";
import { useDeveloperText } from "./hooks/developer";

function App() {
    const developerText = useDeveloperText(["Frontend", "Backend", "Android", "iOS"], 150, 2000);

    return (
        <div style={{ fontFamily: "monospace", fontSize: "24px" }}>
            <h1>My Portfolio, Juan Rb Dev</h1>
            <h3>{developerText}</h3>

            <style>
              
            </style>
        </div>
    );
}

export default App;
