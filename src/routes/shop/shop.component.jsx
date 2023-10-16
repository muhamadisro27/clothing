// import SHOP_DATA from "../../data/shop.json";
import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductContext } from "../../contexts/product.context";
import './shop.style.scss';

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className='products-container'>
      {products.map((product,index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default Shop;
