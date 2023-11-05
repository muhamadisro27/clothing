import {
  ProductCardContainer,
  ProductFooter,
  ProductName,
  ProductPrice,
} from "./product-card.style.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { addItemToCart } from "../../store/cart/cart.action.js";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ProductFooter>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </ProductFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        attributes={{
          onClick: addProductToCart,
        }}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
