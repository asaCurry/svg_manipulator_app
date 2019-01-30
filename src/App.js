import React, { Component } from 'react';
import logo from './lovepop_logo.png';
import './App.css';
import SVG from 'react-inlinesvg';
import svgson from 'svgson';

import defaultSVG from './challenge_2_sample.svg';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      fileSVG: defaultSVG,
      svgString: null,
      svgJSON: [],
      attrValues: []
    }
    this.handleAttrChange = this.handleChange.bind(this);
    this.handleAttrSubmit = this.handleSubmit.bind(this);
    this.fileChange = this.fileChange.bind(this);
  }

  handleAttrChange(event) {
    this.setState({
      /* this is an example of approximately how the attr updates might work */
      attrValues: [..., event.target.value]
    );
  }

  handleAttrSubmit(event) {
    {/* parse svgJSON back into svgString */}
    event.preventDefault();
  }
//parse svg function
parseSVG(value){
  svgson.parse(
      value
  ).then(function(json){
    console.log(JSON.stringify(json,null,2))
  })
}
// handle upload and file storage
  fileChange(event) {
    let newSVG = event.target.files[0];
    const scope = this;

    const reader = new FileReader();

    this.setState({
      fileSVG: URL.createObjectURL(newSVG)
    })

    reader.readAsText(newSVG, 'UTF-8')
      reader.onload = function(e) {
        scope.setState({
          svgString: reader.result
        })
        svgson.parse(
            reader.result,
            {compat: true}
        ).then(function(json){
          console.log(json.childs);
          scope.setState({
            svgJSON: json
          })
          console.log(JSON.stringify(json,null,2))
        })
    }

  }


  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="dropSVG">
          <input type="file" className="fileInput" accept="image/svg+xml" onChange={this.fileChange} multiple />
        </div>
        <section className="svgManipulator">
          <SVG
              src={this.state.fileSVG}
              onLoad={(src) => {
                  console.log(src);
              }}
          >
          </SVG>
          <div className="modifiersRow">
            <div>
              <form>
              {Object.keys(this.state.svgJSON).map((key,index) => (
                /* The intent here was to programmatically render the attr's for each nested 'childs' object, but I wasn't able to get it to work as intended. */
                <label key={'input'+key}>
                  <input value={key} placeholder={key} onChange={this.handleAttrChange} />
                </label>
                ))
              }
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
