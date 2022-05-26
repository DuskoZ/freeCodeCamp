const Buttons = (props) => {
    return (
        <div className="btn-container">
            {/* Row 1 */}
            <button id="clear">AC</button>

            <button id="divide" value="/">
                /
            </button>

            <button id="multiply" value="*">
                *
            </button>

            {/* Row 2 */}
            <button id="seven" value="7">
                7
            </button>

            <button id="eight" value="8">
                8
            </button>

            <button id="nine" value="9">
                9
            </button>

            <button id="subtract" value="-">
                -
            </button>

            {/* Row 3 */}
            <button id="four" value="4">
                4
            </button>

            <button id="five" value="5">
                5
            </button>

            <button id="six" value="6">
                6
            </button>

            <button id="add" value="+">
                +
            </button>

            {/* Row 4 */}
            <button id="one" value="1">
                1
            </button>

            <button id="two" value="2">
                2
            </button>

            <button id="three" value="3">
                3
            </button>

            {/* Row 5 */}
            <button id="zero" value="0">
                0
            </button>

            <button id="decimal" value=".">
                .
            </button>

            <button id="equals" value="=">
                =
            </button>
        </div>
    );
};

export default Buttons;
