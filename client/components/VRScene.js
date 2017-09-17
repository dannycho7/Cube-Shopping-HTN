import { Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Items from "./Items";
import ShoppingCart from "./ShoppingCart";
import SquareCheckout from "./SquareCheckout";

class VRScene extends React.Component {
  render () {
    return (
      <a-entity>
        <a-entity camera="userHeight: 1.6" look-controls wasd-controls>
          <a-entity
            cursor="fuse: true; fuseTimeout: 500;"
            geometry="primitive: ring"
            material="color: white; shader: flat"
            position ="0 0 -1"
            scale="0.02 0.02 0.02"
          />
          <a-entity oculus-touch-controls="hand: left"></a-entity>
          <a-entity oculus-touch-controls="hand: right"></a-entity>
          
          <ShoppingCart />
        </a-entity>

        <SquareCheckout />

        <a-plane
          src="url(/textures/parquet-texture-floor-texture.jpg)"
          width="10"
          height="10"
          rotation="-90 0 0"
        />
        <a-sky color="#ECECEC" />
        <Items />
      </a-entity>
    );
  }
}

export default VRScene;