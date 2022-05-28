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

        // this.allClear = this.allClear.bind(this);
        // this.limitWarning = this.limitWarning.bind(this);
        // this.handleOperator = this.handleOperator.bind(this);
        // this.handleNumber = this.handleNumber.bind(this);
        // this.handleDecimal = this.handleDecimal.bind(this);
        // this.evaluate = this.evaluate.bind(this);
    }

    allClear() {
        this.setState({
            currentValue: "0",
            prevValue: "0",
            formula: "",
            currentSign: "pos",
            lastClicked: "",
            // evaluated: false
        });
    }

    limitWarning() {
        console.log("digit limit");
    }
    handleOperator() {
        console.log("operator click");
    }
    handleNumber() {
        console.log("number click");
    }
    handleDecimal() {
        console.log("decimal dot click");
    }
    evaluate() {
        console.log("equals click");
    }

    render() {
        return (
            <div className="calculator">
                <Formula formula={this.state.formula} />
                <Result result={this.state.currentValue} />
                <Buttons
                    allClear={this.allClear}
                    handleNumber={this.handleNumber}
                    handleDecimal={this.handleDecimal}
                    handleOperator={this.handleOperator}
                    evaluate={this.evaluate}
                />
            </div>
        );
    }
}

export default Calculator;
