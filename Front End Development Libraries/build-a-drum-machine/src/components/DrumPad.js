import React from "react";

const activeStyle = {
    backgroundColor: "#40826d",
    height: 66,
    marginTop: 13,
    color: "#fbfcff",
};

const inactiveStyle = {
    backgroundColor: "#fbfcff",
    marginTop: 10,
    border: "2px solid #40826d",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.25)",
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
            if (this.state.padStyle.backgroundColor === "#40826d") {
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
                    backgroundColor: "#40826d",
                    height: 66,
                    marginTop: 13,
                    borderColor: "#fbfcff",
                    color: "#fbfcff",
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
                    className="clip"
                    src={this.props.clip}
                    type="audio/mpeg"
                />
                {this.props.keyTrigger}
            </div>
        );
    }
}

export default DrumPad;
