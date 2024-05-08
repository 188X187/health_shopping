import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function InfoPages() {
    return (
        <Card style={{ width: '38rem' }}>
            <Card.Img variant="top" src="https://flexible.img.hani.co.kr/flexible/normal/970/777/imgdb/resize/2019/0926/00501881_20190926.JPG" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default InfoPages;