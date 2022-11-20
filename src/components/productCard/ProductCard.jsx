import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../../redux/reducer";
import "./ProductCard.scss";

export default function ProductCard({ product, isLoading }) {
  const [idx, setIdx] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const numberOfImages = product.images.length;
  const moveNext = () => {
    if (idx === numberOfImages) {
      setIdx(1);
    } else {
      setIdx(idx + 1);
    }
  };
  const movePrev = () => {
    if (idx === 1) {
      setIdx(numberOfImages);
    } else {
      setIdx(idx - 1);
    }
  };

  const dispatch = useDispatch();
  const productListInCart = useSelector((state) => state.cart.value);

  const addToCart = (product) => {
    dispatch(addItem(product));
    setIsAddedToCart(true);
  };

  return (
    <div className='product-card' key={product.id}>
      {isLoading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <>
          <div className='image-slider'>
            {/* <button onClick={() => movePrev()}>Prev</button> */}
            <img src={product.images[idx - 1]} />
            {/* <button onClick={() => moveNext()}>next</button> */}
          </div>
          <div className='info-panel'>
            <div className='title'>{product.title}</div>
            <div className='spec'>
              <div className='rating'>Rating: {product.rating}</div>
              <div className='left'>In Stock: {product.stock}</div>
            </div>
            <div className='action'>
              <div className='price'>Price: {product.price}$</div>
              <div className='add-to-cart'>
                <button onClick={() => addToCart(product)}>
                  {isAddedToCart ? (
                    <Link to='/cart' className='link'>
                      Go To Cart
                    </Link>
                  ) : (
                    "Add To Cart"
                  )}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
