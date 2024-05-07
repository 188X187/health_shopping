import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ListCard(props) {
    return (
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={props.image} style={{ height: '15rem' }} />
            <Card.Body style={{height: '14.5rem'}}>
                <Link to={props.link}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.price}원</Card.Text>
                </Link>
                <Button variant="primary">장바구니</Button>
            </Card.Body>
        </Card>
    )
}

export default ListCard;