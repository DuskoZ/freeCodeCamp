import React from "react";
import Buttons from "./components/Buttons";
import Formula from "./components/Formula";
import Result from "./components/Result";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: "0",
            prevValue: "0",
            formula: "",
            currentSign: "pos",
            lastClicked: "",
        };
    }

    render() {
        return (
            <div className="calculator">
                <Formula />
                <Result />
                <Buttons />
            </div>
        );
    }
}

export default Calculator;
