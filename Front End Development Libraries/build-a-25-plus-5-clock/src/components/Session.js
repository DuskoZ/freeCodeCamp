const Session = (props) => {
    return (
        <div className="session-container">
            <h2 id="session-label">Session Length</h2>

            <div className="session-icons">
                <div
                    id="session-decrement"
                    className="icon"
                    onClick={props.handleSessionDecrease}
                >
                    <i className="fa-solid fa-minus"></i>
                </div>

                <div className="num">
                    <p id="session-length">{props.count}</p>
                </div>

                <div
                    id="session-increment"
                    className="icon"
                    onClick={props.handleSessionIncrease}
                >
                    <i className="fa-solid fa-plus"></i>
                </div>
            </div>
        </div>
    );
};

export default Session;
