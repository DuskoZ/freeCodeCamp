const Timer = (props) => {
    let minutes = Math.floor(props.clockCount / 60);
    let seconds = props.clockCount % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return (
        <div className="timer-container">
            <h2 id="timer-label">{props.currentTimer}</h2>
            <p id="time-left">
                {minutes}:{seconds}
            </p>
        </div>
    );
};

export default Timer;
