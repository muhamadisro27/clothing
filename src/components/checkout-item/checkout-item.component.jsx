import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  const { addItemToCart, clearItemFromCart, removeItemFromCart } =
    useContext(CartContext);

  const removeItemHandler = (currentItem) => removeItemFromCart(currentItem);

  const addItemHandler = () => addItemToCart(cartItem);

  const clearItemHandler = (currentItem) => clearItemFromCart(currentItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemHandler(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemHandler(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={() => clearItemHandler(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
