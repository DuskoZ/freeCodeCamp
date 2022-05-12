import { marked } from "marked";

const Preview = (props) => {
    return (
        <div
            id="preview"
            className="text-start"
            dangerouslySetInnerHTML={{
                __html: marked(props.markdown, { renderer: props.renderer }),
            }}
        />
    );
};

export default Preview;
