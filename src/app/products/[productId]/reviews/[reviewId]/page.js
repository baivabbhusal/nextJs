import React from 'react'

const ProductReview = async ({params}) => {
    const productId=(await params).productId;
    const reviewId=(await params).reviewId;
  return (
    <div>
        Product Review
        <ul>
            <li>product Id:{productId}</li>
            <li>Review Id:{reviewId}</li>
        </ul>

    </div>
  );
};
export default ProductReview;