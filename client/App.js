import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Items from "./Items";

class VRScene extends React.Component {
  render () {
    return (
      <Scene>
        <a-entity camera="userHeight: 1.6" look-controls>
          <a-entity
            cursor="fuse: true; fuseTimeout: 500;"
            geometry="primitive: ring"
            material="color: white; shader: flat"
            position ="0 0 -1"
            scale="0.02 0.02 0.02"
          />
        </a-entity>
        <a-circle
          color="#CCC"
          radius="3"
          rotation="-90 0 0"
        />
        <a-sky color="#ECECEC" />
        <Items />
      </Scene>
    );
  }
}

ReactDOM.render(<VRScene/>, document.querySelector('#sceneContainer'));