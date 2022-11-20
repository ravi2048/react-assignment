import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../redux/reducer";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Cart.scss";

export default function Cart() {
  const dispatch = useDispatch();
  const productListInCart = useSelector((state) => state.cart);

  const removeItemFn = (product) => {
    dispatch(removeItem(product));
    sum -= product.price;
  };

  let sum = 0;
  productListInCart.map((product) => (sum += product.price));
  return (
    <div className='cart-page'>
      <Header />
      <div className='sections'>
        <div className='section-1'>
          <h2>Added Items</h2>
          {productListInCart.length ? (
            productListInCart.map((product) => (
              <div className='product-card2' key={product.id}>
                <div className='image-slider'>
                  <img src={product.images[0]} alt='productimg' />
                </div>
                <div className='info-panel'>
                  <div className='title'>{product.title}</div>
                  <div className='desc'>{product.description}</div>
                  <div className='rating'>Rating: {product.rating}</div>
                  <div className='left'>In Stock: {product.stock}</div>
                  <div className='price'>Price: {product.price}$</div>
                  <div className='add-to-cart'>
                    <button onClick={() => removeItemFn(product)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1>There is nothing in the cart!</h1>
          )}
        </div>
        <div className='section-2'>
          <h2>Price Details</h2>
          <div className='summary'>
            <div className='no-of-item'>
              Total Items: {productListInCart.length}
            </div>
            <div className='total-price'>Total Price: {sum}$</div>
            <div className="checkout-btn">
              <button>Checkout {sum}$</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
