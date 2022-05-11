import "./App.css";
// import Editor from "./components/Editor";
// import Preview from "./components/Preview";
import React, { useState } from "react";
import { marked, Renderer } from "marked";

marked.setOptions({
    breaks: true,
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
};

const Preview = (props) => {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: marked(props.markdown, { renderer: renderer }),
            }}
            id="preview"
        />
    );
};

const App = () => {
    const { text, setText } = useState(placeholder);

    return (
        <div className="text-center px-4">
            <h1 className="p-4">Markdown Previewer</h1>

            {/* <Editor
                placeholder={placeholder}
                onChange={(e) => setText(e.target.value)}
            /> */}

            <textarea
                name="editor"
                id="editor"
                rows="10"
                className="text-editor"
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>

            <h3 className="mt-3">Output</h3>
            <Preview markdown={text} />
        </div>
    );
};

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export default App;
