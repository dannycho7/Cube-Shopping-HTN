import React from "react";
import { connect } from "react-redux";
import { Entity } from "aframe-react";

function buyItem(price) {
  var dataParameter = {
    "amount_money": {
      "amount" : price,
      "currency_code" : "USD"
    },
    "callback_url" : "https://d45a9d15.ngrok.io/callback",
    "client_id" : "sq0idp-EPHo2mTlyHm_-Mm1ePY17g",
    "version": "1.3",
    "notes": "Sample",
    "options" : {
      "supported_tender_types" : ["CREDIT_CARD", "CASH", "OTHER", "SQUARE_GIFT_CARD", "CARD_ON_FILE"]
    }
  };
  window.location = "square-commerce-v1://payment/create?data=" + encodeURIComponent(JSON.stringify(dataParameter));
}

const SquareCheckout = ({ total }) => {
  return (
    <Entity
      geometry="primitive: plane; width: 4; height: 0.8; align: center;"
      position="0 0 -5"
      material="color: #008B8B"
      text="value: Proceed to checkout.; align: center;"
      events={{ mousedown: () => {            
        buyItem(total * 100)
      }}}
    />
  );
}

const mapStateToProps = (state) => {
  const { item } = state;
  return item;
};

export default connect(mapStateToProps)(SquareCheckout);
