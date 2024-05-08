import { Button, Card, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../store/itemSlice";

function ListCard(props) {

    let dispatch = useDispatch();

    return (
        <Card style={{ width: '16rem' }}>
            <Link to="/infoPages" state={{item: props.item}}>
            <Card.Img variant="top" src={props.image} style={{ height: '15rem' }} />
            </Link>
            <Card.Body>
                <Link to='/infoPages' state={{item: props.item}}>
                <Card.Title>{props.title}</Card.Title>
                </Link>
                    </Card.Body>

                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{props.price}원</ListGroup.Item>
                <ListGroup.Item variant="success" onClick={()=>{
                    dispatch(addItem({
                        title:props.title,
                        image:props.image,
                        link:props.link,
                        lprice:props.price
                        }))
                        alert('장바구니에 담겼습니다')}}>장바구니</ListGroup.Item>
                </ListGroup>
        </Card>
    )
}


export default ListCard;