const Controls = (props) => {
    return (
        <div className="controls-container">
            <div
                id="start_stop"
                className="icon"
                onClick={props.handlePlayPause}
            >
                <i
                    className={`fa-solid fa-${
                        props.isPlaying ? "pause" : "play"
                    }`}
                ></i>
            </div>

            <div id="reset" className="icon" onClick={props.handleReset}>
                <i className="fa-solid fa-rotate"></i>
            </div>
        </div>
    );
};

export default Controls;
