import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../store/itemSlice";
import InfoPages from "../informations/InfoPages1";

function ListCard(props) {

    let dispatch = useDispatch();

    return (
        <Card style={{ width: '16rem' }}>
            <Link to="/infoPages" state={{item: props.item}}>
            <Card.Img variant="top" src={props.image} style={{ height: '15rem' }} />
            </Link>
            <Card.Body style={{height: '14.5rem'}}>
                <Link to='/infoPages' state={{item: props.item}}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.price}원</Card.Text>
                </Link>
                <Button variant="primary" onClick={()=>{
                    dispatch(addItem({
                        title:props.title,
                        image:props.image,
                        link:props.link,
                        lprice:props.price
                        }))}}>장바구니</Button>
            </Card.Body>
        </Card>
    )
}

export default ListCard;