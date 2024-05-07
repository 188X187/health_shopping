import styles from "../../pages/cart.module.css";

const CartTotal = () => {
    return (
        <div className={styles.total}>
        <div className={styles.total_price}>
            <p className={styles.cart_product_total_price}>총 상품 금액</p>
            <p className={styles.cart_product_price}>0</p>
        </div>

        <div className={styles.pay_minus}>
            <img src="" alt="minus" />
        </div>
        <div className={styles.sale}>
            <p className={styles.cart_product_sale}>상품 할인</p>
            <p className={styles.cart_product_sale_price}>0</p>
        </div>
        <div className={styles.pay_plus}>
            <img src="" alt="plus" />
        </div>

        <div className={styles.delivery}>
            <p className={styles.cart_product_delivery}>배송비</p>
            <p className={styles.cart_product_delivery_price}>0</p>
        </div>

        <div className={styles.payment}>
            <p className={styles.cart_product_payment}>결제 예정 금액</p>
            <p className={styles.cart_product_payment_price}>0</p>
        </div>
        </div>
    );
};

export default CartTotal;
