import React from "react";

const Editor = (props) => {
    return (
        <textarea
            name="editor"
            id="editor"
            rows="10"
            className="text-editor"
            value={props.placeholder}
        ></textarea>
    );
};

export default Editor;
