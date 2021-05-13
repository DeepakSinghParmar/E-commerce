import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, col }) => {
  return (
    <div
      className={`col-sm-12 col-md-6 col-lg-${col} my-3 `}
      style={{ textAlign: "center" }}
    >
      <div
        className="card p-3 rounded card_lolew"
        style={{ background: "rgb(6, 163, 236)" }}
      >
        <img
          style={{ borderRadius: 20 }}
          className="card-img-top mx-auto imgcard"
          src={product.images[0].url}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </h5>
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(product.ratings / 5) * 100}%` }}
              ></div>
            </div>
            <span id="no_of_reviews" style={{ color: "white" }}>
              ({product.numOfReviews} Reviews)
            </span>
          </div>
          <p className="card-text" style={{ color: "white" }}>
            ${product.price}
          </p>
          <Link
            to={`/product/${product._id}`}
            id="view_btn"
            className="btn btn-block"
            style={{ borderRadius: 20, position: "relative", bottom: -13 }}
          >
            <b style={{ fontSize: 19 }}>View Details</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
