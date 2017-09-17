import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Items from "./Items";
import ShoppingCart from "./ShoppingCart";

function buyItem(price) {
  var dataParameter = {
    "amount_money": {
      "amount" : price,
      "currency_code" : "USD"
    },
    "callback_url" : "https://813a9928.ngrok.io/callback",
    "client_id" : "sq0idp-EPHo2mTlyHm_-Mm1ePY17g",
    "version": "1.3",
    "notes": "notes for the transaction",
    "options" : {
      "supported_tender_types" : ["CREDIT_CARD", "CASH", "OTHER", "SQUARE_GIFT_CARD", "CARD_ON_FILE"]
    }
  };
  window.location = "square-commerce-v1://payment/create?data=" + encodeURIComponent(JSON.stringify(dataParameter));
}

class VRScene extends React.Component {
  render () {
    return (
      <Scene>
        <a-assets>
          <a-asset-item id="pants-obj" src="/models/pants.obj"></a-asset-item>
          <a-asset-item id="pants-mtl" src="/models/pants.mtl"></a-asset-item>
        </a-assets>
        
        <a-entity camera="userHeight: 1.6" look-controls>
          <a-entity
            cursor="fuse: true; fuseTimeout: 500;"
            geometry="primitive: ring"
            material="color: white; shader: flat"
            position ="0 0 -1"
            scale="0.02 0.02 0.02"
          />
          
          <ShoppingCart />
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

export default VRScene;