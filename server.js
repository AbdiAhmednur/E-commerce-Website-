//sk_test_51NCiFXFLhxINLnYYjoObCs4aAfpONwWLh7rf6FK5AOsOarzn9NWaPf4COGCEdrUZ1nEZQTtjwyRHrwh0foojRd4p00X1Si5jvM
// Coffee: price_1NCij3FLhxINLnYYnNEBZ541
// Sunglasses: price_1NCjRXFLhxINLnYYB6dhkSOJ
// Camera: price_1NCjTsFLhxINLnYYqjuHi9hw

const express = require('express');
var cors = require('cors');
const stripe =  require('stripe')('sk_test_51NCiFXFLhxINLnYYjoObCs4aAfpONwWLh7rf6FK5AOsOarzn9NWaPf4COGCEdrUZ1nEZQTtjwyRHrwh0foojRd4p00X1Si5jvM');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async(req, res) => {

    console.log(req.body);
    const items = req.body.items;
    let lineItems = []; 
    items.forEach((items) => {
        lineItems.push({
            price: items.id,
            quantity: items.quantity
        }
        
        )
    });
  const session = await stripe.checkout.sessions.create({
   line_items: lineItems,
   mode: 'payment',
   success_url: "http://localhost:3000/success",
   cancel_url: "http://localhost:3000/cancel" 


  });
  res.send(JSON.stringify({

    url: session.url
  }));


});

app.listen(4000, () => console.log("Listening on port 4000"))