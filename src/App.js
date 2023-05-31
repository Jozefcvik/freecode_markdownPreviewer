import { useState } from 'react';
import { marked } from 'marked';

function App() {

  marked.use({
    breaks: true
  });

  const [text, setText] = useState(defaultText);

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <div className="container my-3">
        <div id="editorBlock">
          <div className="header">
            <img className="imgFreeCode" src={require('./fccLogo.png')} alt="FreeCode Logo" width="20px" />Editor
          </div>
          <textarea
            id="editor"
            rows="10"
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>
        <div id="previewerBlock">
          <div className="header">
            <img className="imgFreeCode" src={require('./fccLogo.png')} alt="FreeCode Logo" width="20px" />
            Previewer
          </div>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(text), }}
          >
          </div>
        </div>
      </div>
    </div >
  );
}

const defaultText = `
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.
  
    \`\`\` // this is multi-line code:

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
