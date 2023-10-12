const App = () => {
  const categories = [
    {
      id: 1,
      img: "#",
      title: "Hats",
    },
    {
      id: 2,
      img: "#",
      title: "Jacket",
    },
    {
      id: 3,
      img: "#",
      title: "Sneakers",
    },
    {
      id: 4,
      img: "#",
      title: "Womens",
    },
    {
      id: 5,
      img: "#",
      title: "Mans",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div className="category-container" key={category.id}>
          <div className="background-image"></div>
          {/* <img src={category.img} alt={category.title} /> */}
          <div className="category-body-container">
            <h1>{category.title}</h1>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
