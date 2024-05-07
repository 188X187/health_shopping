import { Button, Card } from "react-bootstrap";

function ListCard(props) {
    return (
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={props.image} style={{ height: '15rem' }} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.price}원</Card.Text>
                <Button variant="primary">장바구니</Button>
            </Card.Body>
        </Card>
    )
}

export default ListCard;