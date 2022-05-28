const Buttons = (props) => {
    return (
        <div className="btn-container">
            {/* Row 1 */}
            <button id="clear" onClick={props.allClear}>
                AC
            </button>

            <button
                id="divide"
                value="/"
                className="operation"
                onClick={props.handleOperator}
            >
                /
            </button>

            <button
                id="multiply"
                value="*"
                className="operation"
                onClick={props.handleOperator}
            >
                *
            </button>

            {/* Row 2 */}
            <button
                id="seven"
                value="7"
                className="number"
                onClick={props.handleNumber}
            >
                7
            </button>

            <button
                id="eight"
                value="8"
                className="number"
                onClick={props.handleNumber}
            >
                8
            </button>

            <button
                id="nine"
                value="9"
                className="number"
                onClick={props.handleNumber}
            >
                9
            </button>

            <button
                id="subtract"
                value="-"
                className="operation"
                onClick={props.handleOperator}
            >
                -
            </button>

            {/* Row 3 */}
            <button
                id="four"
                value="4"
                className="number"
                onClick={props.handleNumber}
            >
                4
            </button>

            <button
                id="five"
                value="5"
                className="number"
                onClick={props.handleNumber}
            >
                5
            </button>

            <button
                id="six"
                value="6"
                className="number"
                onClick={props.handleNumber}
            >
                6
            </button>

            <button
                id="add"
                value="+"
                className="operation"
                onClick={props.handleOperator}
            >
                +
            </button>

            {/* Row 4 */}
            <button
                id="one"
                value="1"
                className="number"
                onClick={props.handleNumber}
            >
                1
            </button>

            <button
                id="two"
                value="2"
                className="number"
                onClick={props.handleNumber}
            >
                2
            </button>

            <button
                id="three"
                value="3"
                className="number"
                onClick={props.handleNumber}
            >
                3
            </button>

            {/* Row 5 */}
            <button
                id="zero"
                value="0"
                className="number"
                onClick={props.handleNumber}
            >
                0
            </button>

            <button id="decimal" value="." onClick={props.handleDecimal}>
                .
            </button>

            <button id="equals" value="=" onClick={props.evaluate}>
                =
            </button>
        </div>
    );
};

export default Buttons;
