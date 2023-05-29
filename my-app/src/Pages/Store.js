import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { productsArray } from '../productStore';
import ProductCard from '../Components/productCard';

function Store() {
  return (
    <>
      <h1 align="center" className="p-3">
        Welcome to the store!
      </h1>
      <Row xs={1} md={3} className="g-3">
        {productsArray.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
