import React from "react";
import Break from "./components/Break";
import Controls from "./components/Controls";
import Session from "./components/Session";
import Timer from "./components/Timer";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            breakCount: 5,
            sessionCount: 25,
            clockCount: 25 * 60,
            currentTimer: "Session",
            isPlaying: false,
        };

        this.loop = undefined;
        this.handleBreakDecrease = this.handleBreakDecrease.bind(this);
        this.handleBreakIncrease = this.handleBreakIncrease.bind(this);
        this.handleSessionDecrease = this.handleSessionDecrease.bind(this);
        this.handleSessionIncrease = this.handleSessionIncrease.bind(this);

        this.handlePlayPause = this.handlePlayPause.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.loop);
    }

    // Methods

    handleBreakDecrease() {
        const { breakCount, isPlaying, currentTimer } = this.state;

        if (breakCount > 1) {
            if (!isPlaying && currentTimer === "Break") {
                this.setState({
                    breakCount: breakCount - 1,
                    clockCount: (breakCount - 1) * 60,
                });
            } else {
                this.setState({
                    breakCount: breakCount - 1,
                });
            }
        }
    }

    handleBreakIncrease() {
        const { breakCount, isPlaying, currentTimer } = this.state;

        if (breakCount < 60) {
            if (!isPlaying && currentTimer === "Break") {
                this.setState({
                    breakCount: breakCount + 1,
                    clockCount: (breakCount + 1) * 60,
                });
            } else {
                this.setState({
                    breakCount: breakCount + 1,
                });
            }
        }
    }

    handleSessionDecrease() {
        const { sessionCount, isPlaying, currentTimer } = this.state;

        if (sessionCount > 1) {
            if (!isPlaying && currentTimer === "Session") {
                this.setState({
                    sessionCount: sessionCount - 1,
                    clockCount: (sessionCount - 1) * 60,
                });
            } else {
                this.setState({
                    sessionCount: sessionCount - 1,
                });
            }
        }
    }

    handleSessionIncrease() {
        const { sessionCount, isPlaying, currentTimer } = this.state;

        if (sessionCount < 60) {
            if (!isPlaying && currentTimer === "Session") {
                this.setState({
                    sessionCount: sessionCount + 1,
                    clockCount: (sessionCount + 1) * 60,
                });
            } else {
                this.setState({
                    sessionCount: sessionCount + 1,
                });
            }
        }
    }

    handlePlayPause() {}

    handleReset() {}

    render() {
        const {
            breakCount,
            sessionCount,
            clockCount,
            currentTimer,
            isPlaying,
        } = this.state;

        return (
            <div className="app">
                <h1 className="title">Timer Clock</h1>

                <div className="length-container">
                    <Break
                        count={breakCount}
                        handleBreakDecrease={this.handleBreakDecrease}
                        handleBreakIncrease={this.handleBreakIncrease}
                    />
                    <Session
                        count={sessionCount}
                        handleSessionDecrease={this.handleSessionDecrease}
                        handleSessionIncrease={this.handleSessionIncrease}
                    />
                </div>
                <Timer currentTimer={currentTimer} />
                <Controls
                    isPlaying={isPlaying}
                    handlePlayPause={this.handlePlayPause}
                    handleReset={this.handleReset}
                />
            </div>
        );
    }
}

export default App;
