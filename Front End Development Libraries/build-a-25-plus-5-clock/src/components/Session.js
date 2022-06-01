const Session = () => {
    return (
        <div className="session-container">
            <h2 id="session-label">Session Length</h2>

            <div className="session-icons">
                <div id="session-decrement">
                    <i className="fa-solid fa-minus"></i>
                </div>

                <div className="num">
                    <p id="session-length">25</p>
                </div>

                <div id="session-increment">
                    <i className="fa-solid fa-plus"></i>
                </div>
            </div>
        </div>
    );
};

export default Session;
