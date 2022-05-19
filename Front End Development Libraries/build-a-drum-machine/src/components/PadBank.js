import DrumPad from "./components/DrumPad";

const PadBank = (props) => {
    let padBank;
    if (props.power) {
        padBank = props.currentPadBank.map((drumObject, i, padBankArray) => {
            return (
                <DrumPad
                    clip={padBankArray[i].url}
                    clipId={padBankArray[i].id}
                    keyCode={padBankArray[i].keyCode}
                    keyTrigger={padBankArray[i].keyTrigger}
                    power={props.power}
                    updateDisplay={props.updateDisplay}
                />
            );
        });
    } else {
        padBank = props.currentPadBank.map((drumObject, i, padBankArray) => {
            return (
                <DrumPad
                    clip="#"
                    clipId={padBankArray[i].id}
                    keyCode={padBankArray[i].keyCode}
                    keyTrigger={padBankArray[i].keyTrigger}
                    power={props.power}
                    updateDisplay={props.updateDisplay}
                />
            );
        });
    }

    return <div className="pad-bank">{padBank}</div>;
};

export default PadBank;
