import React from "react";
import './CartItems.css'
import chevronleftnormal2x from '../Assets/chevronleftnormal@2x.png'
import vector_cart from '../Assets/vector-cart.svg'
import vector1_cart from '../Assets/vector1-cart.svg'
import { ShopContext } from '../../Contexts/ShopContext'
import { useContext } from "react";

const CartItems = () => {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
    return (
        <div class="new-cart-items">
            <div class="new-cart">Cart</div>
            <div class="new-items">2 items</div>
            <button class="new-empty-cart">Empty Cart</button>
            <div class="new-cart-items-child"></div>

            {all_product.map((e) => {

                if (cartItems[e.id] > 0) {
                    return (
                        <div class="new-rectangle-parent">
                            <div class="new-group-child"></div>
                            <img class="new-group-item" alt="" src={e.image} />
                            <div class="new-rectangle-group">
                                <div class="new-group-inner"></div>
                                <div class="new-women">{e.category}</div>
                            </div>
                            <button class="new-mdiheart-outline">
                                <img class="new-vector-icon" alt="" src={vector_cart} />
                            </button>
                            <button class="new-tablertrash">
                                <img class="new-vector-icon1" alt="" src={vector1_cart} onClick={() => { removeFromCart(e) }} />
                            </button>
                            <div class="new-striped-flutter-sleeve">
                                {e.name}
                            </div>
                            <button class="new-group-button">
                                <div class="new-group-child2"></div>
                                <div class="new-group-child3"></div>
                            </button>
                            <div class="new-rectangle-div"></div>
                            <div class="new-div">{cartItems[e.id]}</div>
                            <div class="new-egp230">${e.new_price}</div>
                            <div class="new-egp230">${e.new_price}</div>
                        </div>);
                }
                return null;

            })}

            <div class="new-subtotal-parent">
                <div class="new-subtotal">Subtotal</div>
                <div class="new-free">EGP621</div>
            </div>
            <div class="new-total-parent">
                <b class="new-total">Total</b>
                <b class="new-egp6211">EGP621</b>
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
            <button class="new-cart-items-inner"></button>
        </div>


    )
}

export default CartItems;