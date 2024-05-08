import CartHeader from "../components/cart/CartHeader";
import CartList from "../components/cart/CartList";
import CartTotal from "../components/cart/CartTotal";
import styles from "./cart.module.css";

const Cart = ({cart}) => {
    return (
        <>
            <header className={styles.header}>
                <h1>장바구니</h1>
            </header>
            <CartHeader />
            <CartList />
            <CartTotal />
        </>
    );
};

export default Cart;
