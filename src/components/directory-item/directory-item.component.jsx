import {
  BackgroundImage,
  DirectoryBody,
  DirectoryItemContainer
} from "./directory-item.style";

const CategoryItem = ({ category }) => {
  const { id, img, title } = category;

  return (
    <DirectoryItemContainer key={id}>
      <BackgroundImage imageUrl={img} />
      <DirectoryBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBody>
    </DirectoryItemContainer>
  );
};

export default CategoryItem;
