const Editor = (props) => {
    return (
        <textarea
            name="editor"
            rows="10"
            id="editor"
            className="text-editor"
            onChange={props.onChange}
            value={props.markdown}
        />
    );
};

export default Editor;
