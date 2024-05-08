import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../../store/itemSlice";

function CartApple() {
    let state = useSelector((state) => state);
    let dispatch = useDispatch();


    return (
        <div>
        <Table>
            <thead>
            <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
            </tr>
            </thead>
            <tbody>
            {state.item.map((a, i) => (
                <tr key={i}>
                    <td>{state.item[i].id}</td>
                    <td>{state.item[i].name}</td>
                    <td>{state.item[i].count}</td>
                    <td>
                        <button onClick={()=>{
                            dispatch(decrease(i))
                        }}>
                            -
                        </button>
                        <button onClick={()=>{
                            dispatch(increase(i))
                        }}>
                            +
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
        </div>
    );
}

export default CartApple;
