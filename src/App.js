import "./style/categories.style.scss";
import categories from "./data/categories.json";
import CategoryItem from "./components/category-item/category-item.component";

const App = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default App;
