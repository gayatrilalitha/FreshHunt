
function ProductCard({
  product,
  addToCart,
  decreaseQuantity,
  quantity
}) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <div className="product-info">

        <h3>{product.name}</h3>

        <p>{product.unit}</p>

        <div className="product-bottom">

          <h4>₹{product.price}</h4>

          {!product.available ? (
            <button className="out-of-stock" disabled>
              Out of Stock
            </button>
          ) : quantity === 0 ? (
            <button
              className="add-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          ) : (
            <div className="quantity-control">

              <button onClick={() => decreaseQuantity(product.id)}>
                -
              </button>

              <span>{quantity}</span>

              <button onClick={() => addToCart(product)}>
                +
              </button>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default ProductCard;
