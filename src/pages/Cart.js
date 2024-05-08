import { useSelector } from "react-redux";
import CartHeader from "../components/cart/CartHeader";
import CartList from "../components/cart/CartList";
import CartTotal from "../components/cart/CartTotal";
import styles from "./cart.module.css";

const Cart = () => {

    let state = useSelector((state)=>state);

    return (
        <>
            <header className={styles.header}>
                <h1>장바구니</h1>
            </header>
            <CartHeader />
            {state.item.map((a, i)=>(
                <CartList
                    title={state.item[i].title}
                    image={state.item[i].image}
                    price={state.item[i].lprice}/>))}
            <CartTotal />
        </>
    );
};

export default Cart;
