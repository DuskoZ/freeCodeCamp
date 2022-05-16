import React from "react";

const activeStyle = {
    backgroundColor: "var(--clr-accent)",
    boxShadow: "0 3px var(--clr-accent)",
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

    activatePad() {}

    playSound() {}

    render() {
        return <div></div>;
    }
}

export default DrumPad;
