import React from "react";
import { marked } from "marked";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

marked.setOptions({
    breaks: true,
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: placeholder,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            markdown: e.target.value,
        });
    }

    render() {
        return (
            <div className="container text-center p-4">
                <h1 className="text-primary p-4">Markdown Previewer</h1>

                <div className="container-fluid row mt-4">
                    <div class="col-xl-5 box-shadow">
                        <Editor
                            markdown={this.state.markdown}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div class="col-xl-7 box-shadow preview-container">
                        <h3 className="output">Output</h3>
                        <Preview
                            markdown={this.state.markdown}
                            renderer={renderer}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const placeholder = `# React Markdown Previewer!

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
