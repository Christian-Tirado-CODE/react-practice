import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const params = useParams();

    console.log(params.productId);
    return (
        <section>
         <h1>Product details</h1>
         {params.productId}
        </section>
    );
};

export default ProductDetails;