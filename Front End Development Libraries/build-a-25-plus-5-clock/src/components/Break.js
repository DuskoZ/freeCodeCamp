const Break = () => {
    return (
        <div className="break-container">
            <h2 id="break-label">Break Length</h2>

            <div className="break-icons">
                <div id="break-decrement">
                    <i className="fa-solid fa-minus"></i>
                </div>

                <div className="num">
                    <p id="break-length">5</p>
                </div>

                <div id="break-increment">
                    <i className="fa-solid fa-plus"></i>
                </div>
            </div>
        </div>
    );
};

export default Break;
