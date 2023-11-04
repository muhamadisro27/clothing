import { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          title={title}
          products={categoriesMap[title]}
          key={title}
        />
      ))}
    </Fragment>
  );
};

export default CategoriesPreview;
