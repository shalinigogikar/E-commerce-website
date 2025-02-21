import React from "react";
import { useParams } from "react-router-dom";
import ProductData from "./ProductData"; // Mock Data

function ProductPage() {
  const { id } = useParams(); // Extract 'id' from URL
  const product = ProductData.find((p) => p.id.toString() === id);

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div>
      <h2>{product.title}</h2>

      {/* Display product images */}
      <div>
        {product.images && product.images.length > 0 ? (
          product.images.map((img, index) => (
            <img key={index} src={img} alt={product.title} width="200" />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>

      {/* Display product reviews */}
      <h4>Reviews:</h4>
      {product.reviews && product.reviews.length > 0 ? (
        <ul>
          {product.reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
}

export default ProductPage;
