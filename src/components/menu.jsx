
function Menu({ selectedCategory, setSelectedCategory }) {

  const categories = [
    "Vegetables",
    "Fruits",
    "Leafy Vegetables"
  ];

  return (
    <aside className="sidebar">
      <h3>Shop by Category</h3>

      {categories.map((category) => (
        <div
          key={category}
          className={`category ${
            selectedCategory === category ? "active" : ""
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </div>
      ))}
    </aside>
  );
}

export default Menu;
