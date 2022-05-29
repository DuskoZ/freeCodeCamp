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
            evaluated: false,
        };

        this.allClear = this.allClear.bind(this);
        this.limitWarning = this.limitWarning.bind(this);
        this.handleOperator = this.handleOperator.bind(this);
        this.handleNumber = this.handleNumber.bind(this);
        this.handleDecimal = this.handleDecimal.bind(this);
        this.evaluate = this.evaluate.bind(this);
    }

    allClear() {
        this.setState({
            currentValue: "0",
            prevValue: "0",
            formula: "",
            currentSign: "pos",
            lastClicked: "",
            evaluated: false,
        });
    }

    limitWarning() {
        this.setState({
            currentValue: "Digit Limit",
            prevValue: this.state.currentValue,
        });

        setTimeout(() => {
            this.setState({ currentValue: this.state.prevValue });
        }, 1000);
    }

    handleOperator(e) {
        if (!this.state.currentValue.includes("Limit")) {
            const { formula, prevValue, evaluated } = this.state;
            const value = e.target.value;
            this.setState({ currentValue: value, evaluated: false });

            if (evaluated) {
                this.setState({ formula: prevValue + value });
            } else if (!/[*/+-]$/.test(formula)) {
                this.setState({
                    prevValue: formula,
                    formula: formula + value,
                });
            } else if (!/\d[*/+-]{1}-$/.test(formula)) {
                this.setState({
                    formula:
                        (/\d[*/+-]{1}-$/.test(formula + value)
                            ? formula
                            : prevValue) + value,
                });
            } else if (value !== "-") {
                this.setState({
                    formula: prevValue + value,
                });
            }
        }
    }

    handleNumber(e) {
        if (!this.state.currentValue.includes("Limit")) {
            const { currentValue, formula, evaluated } = this.state;
            const value = e.target.value;
            this.setState({ evaluated: false });

            // Display Digit Limit Warning
            if (currentValue.length > 17) {
                this.limitWarning();
            } else if (evaluated) {
                this.setState({
                    currentValue: value,
                    formula: value !== "0" ? value : "",
                });
            } else {
                this.setState({
                    currentValue:
                        currentValue === "0" || /[*/+-]/.test(currentValue)
                            ? value
                            : currentValue + value,
                    formula:
                        currentValue === "0" && value === "0"
                            ? formula === ""
                                ? value
                                : formula
                            : /([^.0-9]0|^0)$/.test(formula)
                            ? formula.slice(0, -1) + value
                            : formula + value,
                });
            }
        }
    }

    handleDecimal() {}

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
