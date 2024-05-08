import { useSelector } from "react-redux";
import styles from "../../pages/cart.module.css";

const CartList = (props) => {

    let state = useSelector((state)=>state);

    return (
        <section className={styles.cart_product_list}>
        <input type="checkbox" />
        <div className={styles.cart_product_wrap}>
            <div className={styles.cart_product_image}>
            <img src={props.image} alt="product-img" />
            </div>

            <div className={styles.cart_product_info}>
            <p className={styles.seller_store}>{props.title}</p>
            <p className={styles.price}>{props.price}원</p>
            <p className={styles.delivery}>택배배송 / 무료배송</p>
            </div>
        </div>

        <div className={styles.cart_product_count}>
            <img className={styles.minus} src="/images/icon-minus-line.svg" alt="minus" />

            <div className={styles.count}>
            <span>5</span>
            </div>
            <img className={styles.plus} src="/images/icon-plus-line.svg" alt="plus" />
        </div>
        </section>
    );
};

export default CartList;
