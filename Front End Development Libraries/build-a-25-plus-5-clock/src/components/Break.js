const Break = (props) => {
    return (
        <div className="break-container">
            <h2 id="break-label">Break Length</h2>

            <div className="break-icons">
                <div
                    id="break-decrement"
                    className="icon"
                    onClick={props.handleBreakDecrease}
                >
                    <i className="fa-solid fa-minus"></i>
                </div>

                <div className="num">
                    <p id="break-length">{props.count}</p>
                </div>

                <div
                    id="break-increment"
                    className="icon"
                    onClick={props.handleBreakIncrease}
                >
                    <i className="fa-solid fa-plus"></i>
                </div>
            </div>
        </div>
    );
};

export default Break;
