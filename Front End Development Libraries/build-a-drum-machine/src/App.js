import React from "react";
import PadBank from "./components/PadBank";

const bankOne = [
    {
        keyCode: 81,
        keyTrigger: "Q",
        id: "Heater-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
        keyCode: 87,
        keyTrigger: "W",
        id: "Heater-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
        keyCode: 69,
        keyTrigger: "E",
        id: "Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
        keyCode: 65,
        keyTrigger: "A",
        id: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
        keyCode: 83,
        keyTrigger: "S",
        id: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
        keyCode: 68,
        keyTrigger: "D",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Kick-n'-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
        keyCode: 88,
        keyTrigger: "X",
        id: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
        keyCode: 67,
        keyTrigger: "C",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
];

const bankTwo = [
    {
        keyCode: 81,
        keyTrigger: "Q",
        id: "Chord-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
        keyCode: 87,
        keyTrigger: "W",
        id: "Chord-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
        keyCode: 69,
        keyTrigger: "E",
        id: "Chord-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
        keyCode: 65,
        keyTrigger: "A",
        id: "Shaker",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
        keyCode: 83,
        keyTrigger: "S",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    {
        keyCode: 68,
        keyTrigger: "D",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Punchy-Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
        keyCode: 88,
        keyTrigger: "X",
        id: "Side-Stick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
        keyCode: 67,
        keyTrigger: "C",
        id: "Snare",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            power: true,
            display: String.fromCharCode(160),
            currentPadBank: bankOne,
            currentPadBankId: "Heater Kit",
            sliderValue: 0.3,
        };
        this.powerControl = this.powerControl.bind(this);
        this.selectBank = this.selectBank.bind(this);
        this.adjustVolume = this.adjustVolume.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
        this.displayClipName = this.displayClipName.bind(this);
    }

    powerControl() {
        this.setState({
            power: !this.state.power,
            display: String.fromCharCode(160),
        });
    }

    selectBank() {
        if (this.state.power) {
            if (this.state.currentPadBankId === "Heater Kit") {
                this.setState({
                    display: "Smooth Piano Kit",
                    currentPadBank: bankTwo,
                    currentPadBankId: "Smooth Piano Kit",
                });
            } else {
                this.setState({
                    display: "Heater Kit",
                    currentPadBank: bankOne,
                    currentPadBankId: "Heater Kit",
                });
            }
        }
    }

    adjustVolume(e) {
        if (this.state.power) {
            this.setState({
                sliderValue: e.target.value,
                display: "Volume: " + Math.round(e.target.value * 100),
            });
            setTimeout(() => this.clearDisplay(), 1000);
        }
    }

    clearDisplay() {
        this.setState({
            display: String.fromCharCode(160),
        });
    }

    displayClipName(name) {
        if (this.state.power) {
            this.setState({
                display: name,
            });
        }
    }

    render() {
        const powerSlider = this.state.power
            ? { float: "right" }
            : { float: "left" };

        const bankSlider =
            this.state.currentPadBank === bankOne
                ? { float: "left" }
                : { float: "right" };

        const clips = [].slice.call(document.getElementsByClassName("clip"));
        clips.forEach((clip) => {
            clip.volume = this.state.sliderValue;
        });

        return (
            <div className="container" id="drum-machine">
                <PadBank
                    power={this.state.power}
                    clipVolume={this.state.sliderValue}
                    currentPadBank={this.state.currentPadBank}
                    updateDisplay={this.displayClipName}
                />

                {/* Logo */}
                <div className="logo-container">
                    <h2 className="logo">eDrum</h2>
                </div>

                <div className="controls-container">
                    {/* Power Select */}
                    <div className="control">
                        <p>Power</p>
                        <div className="select" onClick={this.powerControl}>
                            <div className="inner" style={powerSlider} />
                        </div>
                    </div>

                    {/* Display */}
                    <p id="display">{this.state.display}</p>

                    {/* Volume */}
                    <div className="volume-slider">
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={this.state.sliderValue}
                            onChange={this.adjustVolume}
                        />
                    </div>

                    {/* Bank Select */}
                    <div className="control">
                        <p>Bank</p>
                        <div className="select" onClick={this.selectBank}>
                            <div className="inner" style={bankSlider} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
