
function Header({ cartCount }) {
  return (
    <header className="header">
      <h1>FreshHunt</h1>

      <input
        type="text"
        className="search-bar"
        placeholder="Search vegetables, fruits..."
      />

      <div className="cart">
        🛒 Cart
        <span>{cartCount}</span>
      </div>
    </header>
  );
}

export default Header;
