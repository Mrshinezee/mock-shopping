import './Cart.scss';

const Cart = () => {
  return (
    <div className="Cart">
      <div>cart header</div>
      
      <div>
                <strong>Cart title</strong> - cartItem price (
                cart quantity)
              </div>
              <div>
                <button
                >
                  Remove from Cart
                </button>
              </div>
    </div>
  );
}

export default Cart;