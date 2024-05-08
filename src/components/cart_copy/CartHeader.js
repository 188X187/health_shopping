import styles from "../../pages/cart.module.css";

const CartHeader = () => {

    return (
        <div className={styles.cart_title_wrap}>
            <div className={styles.tab_title}>
                <input type="checkbox" />
                <span>상품정보</span>
                <span>수량</span>
                <span>상품금액</span>
                <p>전체선택</p>
            </div>
        </div>
    );
}

export default CartHeader;