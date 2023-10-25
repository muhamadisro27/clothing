import "./directory-item.style.scss";

const CategoryItem = ({ category }) => {
  const { id, img, title } = category;

  return (
    <div className="directory-item-container" key={id}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
