<script>
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
  </script>
<a-scene>
      <a-assets></a-assets>

      <a-entity camera="userHeight: 1.6" look-controls>
        <a-entity cursor="fuse: true; fuseTimeout: 500;" geometry="primitive: ring" material="color: white;
            shader: flat" position ="0 0 -1" scale="0.02 0.02 0.02"></a-entity>
      </a-entity>
      <a-circle color="#CCC" radius="3" rotation="-90 0 0"></a-circle>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
    
    <script>
      let items = <%- JSON.stringify(locals.items) || [] %>;
      let cart = {};
      items.forEach(function(item, i){
        var sceneEl = document.querySelector('a-scene');
        var entityEl = document.createElement('a-box');
        entityEl.setAttribute("width", "0.5");
        entityEl.setAttribute("height", "0.5");
        entityEl.setAttribute("depth", "0.5");
        entityEl.setAttribute("color", "tomato");
        entityEl.addEventListener("click", function() {
          cart[item["name"]] = item["price"];
        });
        var position = getPositionString(i + 1, 2, 6, 2);
        entityEl.setAttribute("position", position);
        sceneEl.appendChild(entityEl);
        console.log(i + ": " + position);
      });
      
      function getPositionString(positionNumber, levelHeight, numPositions, radius) {
        var level = parseInt(positionNumber / numPositions);
        var place = (positionNumber - 1) % numPositions;
        return radius * Math.cos(place * 2 * Math.PI/numPositions) + " " + level * levelHeight + " " + radius * Math.sin(place * 2 * Math.PI / numPositions);
      };
    </script>