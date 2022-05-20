import DrumPad from "./DrumPad";

const PadBank = (props) => {
    let padBank;
    if (props.power) {
        padBank = props.currentPadBank.map((drumObject, i, padBankArray) => {
            return (
                <DrumPad
                    power={props.power}
                    keyCode={padBankArray[i].keyCode}
                    keyTrigger={padBankArray[i].keyTrigger}
                    clipId={padBankArray[i].id}
                    clip={padBankArray[i].url}
                    updateDisplay={props.updateDisplay}
                />
            );
        });
    } else {
        padBank = props.currentPadBank.map((drumObject, i, padBankArray) => {
            return (
                <DrumPad
                    power={props.power}
                    keyCode={padBankArray[i].keyCode}
                    keyTrigger={padBankArray[i].keyTrigger}
                    clipId={padBankArray[i].id}
                    clip="#"
                    updateDisplay={props.updateDisplay}
                />
            );
        });
    }

    return <div className="pad-bank">{padBank}</div>;
};

export default PadBank;
