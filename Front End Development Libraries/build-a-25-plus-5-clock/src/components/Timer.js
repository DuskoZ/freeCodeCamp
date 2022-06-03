const Timer = (props) => {
    return (
        <div className="timer-container">
            <h2 id="timer-label">{props.currentTimer}</h2>
            <p id="time-left">25:00</p>
        </div>
    );
};

export default Timer;
