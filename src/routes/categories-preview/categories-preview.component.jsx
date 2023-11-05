import { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import {
  selectCategoriesMap,
  selectIsCategoriesLoading,
} from "../../store/categories/categories.selector";
import { Spinner } from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsCategoriesLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => (
          <CategoryPreview
            title={title}
            products={categoriesMap[title]}
            key={title}
          />
        ))
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
