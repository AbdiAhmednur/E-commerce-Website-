// Coffee: price_1NCij3FLhxINLnYYnNEBZ541
// Sunglasses: price_1NCjRXFLhxINLnYYB6dhkSOJ
// Camera: price_1NCjTsFLhxINLnYYqjuHi9hw

const productsArray = [
{
  id: "price_1NCij3FLhxINLnYYnNEBZ541",
  title: "Coffee",
  price: 4.99
},

{
    id: "price_1NCjRXFLhxINLnYYB6dhkSOJ",
    title: "Sunglasses",
    price: 9.99
  },
  {
    id: "price_1NCjTsFLhxINLnYYqjuHi9hw",
    title: "Camera",
    price: 39.99

  }

]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)
    if (productData === undefined){
        console.log("product data does not exist for ID: " + id)
        return undefined;
    }
     return productData;
}


export {productsArray, getProductData };