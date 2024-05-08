import styles from "../../pages/cart.module.css";

const CartList = ({ cart }) => {
    return (
        <section className={styles.cart_product_list}>
        <input type="checkbox" />
        <div className={styles.cart_product_wrap}>
            <div className={styles.cart_product_image}>
            <img src="" alt="product-img" />
            </div>

            <div className={styles.cart_product_info}>
            <p className={styles.seller_store}>d</p>
            <p className={styles.product_name}>a</p>
            <p className={styles.price}>b</p>
            <p className={styles.delivery}>택배배송 / 무료배송</p>
            </div>
        </div>

        <div className={styles.cart_product_count}>
            <img className={styles.minus} src="" alt="minus" />

            <div className={styles.count}>
            <span>5</span>
            </div>
            <img className={styles.plus} src="" alt="plus" />
        </div>
        </section>
    );
};

export default CartList;
