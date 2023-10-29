import {
  BackgroundImage,
  DirectoryBody,
  DirectoryItemContainer,
} from "./directory-item.style";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { id, img, title, route } = category;

  const navigate = useNavigate();

  const redirectCategory = () => {
    navigate(route);
  };

  return (
    <DirectoryItemContainer onClick={redirectCategory} key={id}>
      <BackgroundImage imageurl={img} />
      <DirectoryBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBody>
    </DirectoryItemContainer>
  );
};

export default CategoryItem;
