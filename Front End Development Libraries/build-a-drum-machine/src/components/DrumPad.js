import React from "react";

const activeStyle = {
    backgroundColor: "orange",
    boxShadow: "0 3px orange",
    height: 77,
    marginTop: 13,
};

const inactiveStyle = {
    backgroundColor: "grey",
    marginTop: 10,
    boxShadow: "3px 3px 5px black",
};

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            padStyle: inactiveStyle,
        };

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.playSound = this.playSound.bind(this);
        this.activatePad = this.activatePad.bind(this);
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
    }

    handleKeyPress(e) {
        if (e.keyCode === this.props.keyCode) {
            this.playSound();
        }
    }

    activatePad() {
        if (this.props.power) {
            if (this.state.padStyle.backgroundColor === "orange") {
                this.setState({
                    padStyle: inactiveStyle,
                });
            } else {
                this.setState({
                    padStyle: activeStyle,
                });
            }
        } else if (this.state.padStyle.marginTop === 13) {
            this.setState({
                padStyle: inactiveStyle,
            });
        } else {
            this.setState({
                padStyle: {
                    height: 77,
                    marginTop: 13,
                    backgroundColor: "grey",
                    boxShadow: "0 3px grey",
                },
            });
        }
    }

    playSound() {
        const sound = document.getElementById(this.props.keyTrigger);
        sound.currentTime = 0;
        sound.play();
        this.activatePad();

        setTimeout(() => this.activatePad(), 100);
        this.props.updateDisplay(this.props.clipId.replace(/-/g, " "));
    }

    render() {
        return (
            <div
                className="drum-pad"
                id={this.props.clipId}
                style={this.state.padStyle}
                onClick={this.playSound}
            >
                <audio
                    id={this.props.keyTrigger}
                    className="audio-clip"
                    src={this.props.clip}
                />
                {this.props.keyTrigger}
            </div>
        );
    }
}

export default DrumPad;
