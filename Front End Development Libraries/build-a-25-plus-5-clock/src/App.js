import React from "react";
import Break from "./components/Break";
import Controls from "./components/Controls";
import Session from "./components/Session";
import Timer from "./components/Timer";

function App() {
    return (
        <div className="app">
            <h1 className="title">Timer Clock</h1>

            <div className="length-container">
                <Break />
                <Session />
            </div>
            <Timer />
            <Controls />
        </div>
    );
}

export default App;
