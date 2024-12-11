import React from "react";
import './CartItems.css'
import chevronleftnormal2x from '../Assets/chevronleftnormal@2x.png'
import vector_cart from '../Assets/vector-cart.svg'
import vector1_cart from '../Assets/vector1-cart.svg'
import plus from '../Assets/plus.png'
import minus from '../Assets/minus.png'
import { ShopContext } from '../../Contexts/ShopContext'
import { useContext } from "react";
import question from '../Assets/question-mark@2x.png'
import boxes from '../Assets/boxes-and-shopping-bag-with-discount-symbol@2x.png';

const CartItems = () => {
    const { removeFromCart2, clearCart, getTotalCartItems, getTotalCartAmount, all_product, cartItems, removeFromCart, addToCart } = useContext(ShopContext);
    const cartHasItems = Object.values(cartItems).some(quantity => quantity > 0);

    const handleClearCart = () => {
        clearCart();
    }
    return (
        <div class="new-cart-items">
            <div class="new-cart2">


                <div class="new-cart">Cart</div>
                {cartHasItems && (
                    <>
                        <div class="new-items"><span>{getTotalCartItems()}</span> items</div>
                        <button class="new-empty-cart" onClick={handleClearCart}>Empty Cart</button>
                        <div class="new-cart-items-child"></div>
                    </>
                )}


                {all_product.map((e) => {

                    if (cartItems[e.id] > 0) {
                        return (
                            <div class="new-rectangle-parent">
                                <div class="new-group-child"></div>
                                <img class="new-group-item" alt="" src={e.image} />
                                <div class="new-rectangle-group">
                                    <div class="new-group-inner">
                                        <div class="new-women">{e.category}</div>
                                    </div>

                                </div>
                                <button class="new-mdiheart-outline">
                                    <img class="new-vector-icon" alt="" src={vector_cart} />
                                </button>
                                <button class="new-tablertrash" onClick={() => { removeFromCart(e.id) }}>
                                    <img class="new-vector-icon1" alt="" src={vector1_cart} />
                                </button>
                                <div class="new-striped-flutter-sleeve">
                                    {e.name}
                                </div>
                                <div class="new-rectangle-div">
                                    <button class="new-plus" onClick={() => addToCart(e.id)}>
                                        <div>
                                            <img class="new-plus-icon" alt="" src={plus} />
                                        </div>
                                    </button>
                                    <button class="new-minus" onClick={() => removeFromCart2(e.id)}>
                                        <div>
                                            <img class="new-cart-items-inner" src={minus} alt="" />
                                        </div>
                                    </button>
                                </div>
                                <div class="new-div">{cartItems[e.id]}</div>
                                <div class="new-egp230">${e.new_price}</div>
                                <div class="new-egp230">${e.new_price}</div>
                            </div>);
                    }
                    return null;

                })}

                {cartHasItems && (
                    <>
                        <div class="new-subtotal-parent">
                            <div class="new-subtotal">Subtotal</div>
                            <div class="new-free">EGP{getTotalCartAmount()}</div>
                        </div>
                        <img src="" alt="" />
                        <div class="new-total-parent">
                            <b class="new-total">Total</b>
                            <b class="new-egp6211">EGP{getTotalCartAmount()}</b>
                        </div>
                        <div class="new-shipping-parent">
                            <div class="new-subtotal">Shipping</div>
                            <div class="new-free">Free</div>
                        </div>
                        <div class="new-cart-items-item"></div>
                        <div class="new-i-have-a">I have a promocode</div>
                        <img class="new-chevron-left-normal-icon" alt="" src={chevronleftnormal2x} />
                        <button class="new-rectangle-container">
                            <div class="new-group-child1"></div>
                            <div class="new-checkout">Checkout</div>
                        </button>
                    </>
                )}

                {!cartHasItems && (
                    <>
                        <div class="cart-items2">
                            <div class="nothing-in-here">Nothing in Here!</div>
                            <div class="your-cart-is">Your cart is currently empty.</div>
                            <button class="rectangle-parent-no">
                                <div class="group-child-no"></div>
                                <div class="continue-shopping">Continue Shopping</div>
                            </button>
                            <img
                                class="boxes-and-shopping-bag-with-di"
                                alt=""
                                src={boxes}
                            />

                            <img
                                class="question-mark-icon"
                                alt=""
                                src={question}
                            />
                        </div>
                    </>
                )}

            </div>
        </div>


    )
}

export default CartItems;