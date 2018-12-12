import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import '../styles/Dropdown.css';

let hamburgerSVG = 
  <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
    <title/>
    <desc/>

    <g>
      <title>background</title>
      <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
    </g>
    <g>
      <title>Layer 1</title>
      <path fill="#e1f196" id="svg_1" d="m0,2l25,0l0,4l-25,0l0,-4zm0,8l25,0l0,4l-25,0l0,-4zm0,8l25,0l0,4l-25,0l0,-4z"/>
    </g>
  </svg>
;

class EnterNodeDropdownButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return(
      <DropdownButton
        title={hamburgerSVG}
        id="dropdown-menu"
        noCaret={true}
        bsSize="small"
        pullRight
      >
        <MenuItem className="dropdown-item" eventKey="1">0X Menu</MenuItem>
        <MenuItem className="dropdown-item" eventKey="2">01 About</MenuItem>
      </DropdownButton>
    );
  }
}

export default EnterNodeDropdownButton;