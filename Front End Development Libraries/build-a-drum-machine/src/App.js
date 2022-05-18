import React from "react";
import { useState } from "react";
import DrumPad from "./components/DrumPad";

const bankOne = [
    {
        keyCode: 81,
        keyTrigger: "Q",
        id: "Heater-1",
        url: "./sounds/bank-one/Heater-1.mp3",
    },
    {
        keyCode: 87,
        keyTrigger: "W",
        id: "Heater-2",
        url: "./sounds/bank-one/Heater-2.mp3",
    },
    {
        keyCode: 69,
        keyTrigger: "E",
        id: "Heater-3",
        url: "./sounds/bank-one/Heater-3.mp3",
    },
    {
        keyCode: 65,
        keyTrigger: "A",
        id: "Heater-4",
        url: "./sounds/bank-one/Heater-4_1.mp3",
    },
    {
        keyCode: 83,
        keyTrigger: "S",
        id: "Clap",
        url: "./sounds/bank-one/Heater-6.mp3",
    },
    {
        keyCode: 68,
        keyTrigger: "D",
        id: "Open-HH",
        url: "./sounds/bank-one/Dsc_Oh.mp3",
    },
    {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Kick-n'-Hat",
        url: "./sounds/bank-one/Kick_n_Hat.mp3",
    },
    {
        keyCode: 88,
        keyTrigger: "X",
        id: "Kick",
        url: "./sounds/bank-one/RP4_KICK_1.mp3",
    },
    {
        keyCode: 67,
        keyTrigger: "C",
        id: "Closed-HH",
        url: "./sounds/bank-one/Cev_H2.mp3",
    },
];

const bankTwo = [
    {
        keyCode: 81,
        keyTrigger: "Q",
        id: "Chord-1",
        url: "./sounds/bank-two/Chord_1.mp3",
    },
    {
        keyCode: 87,
        keyTrigger: "W",
        id: "Chord-2",
        url: "./sounds/bank-two/Chord_2.mp3",
    },
    {
        keyCode: 69,
        keyTrigger: "E",
        id: "Chord-3",
        url: "./sounds/bank-two/Chord_3.mp3",
    },
    {
        keyCode: 65,
        keyTrigger: "A",
        id: "Shaker",
        url: "./sounds/bank-two/Give_us_a_light.mp3",
    },
    {
        keyCode: 83,
        keyTrigger: "S",
        id: "Open-HH",
        url: "./sounds/bank-two/Dry_Ohh.mp3",
    },
    {
        keyCode: 68,
        keyTrigger: "D",
        id: "Closed-HH",
        url: "./sounds/bank-two/Bld_H1.mp3",
    },
    {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Punchy-Kick",
        url: "./sounds/bank-two/punchy_kick_1.mp3",
    },
    {
        keyCode: 88,
        keyTrigger: "X",
        id: "Side-Stick",
        url: "./sounds/bank-two/side_stick_1.mp3",
    },
    {
        keyCode: 67,
        keyTrigger: "C",
        id: "Snare",
        url: "./sounds/bank-two/Brk_Snr.mp3",
    },
];

// function App() {
//     return (
//         <div className="App">
//             <h1>Drum</h1>
//         </div>
//     );
// }

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

    selectBank() {}
    adjustVolume() {}
    clearDisplay() {}
    displayClipName() {}

    render() {
        return <h1>Drum</h1>;
    }
}

export default App;
