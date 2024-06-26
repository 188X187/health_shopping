import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { addItem } from "../store/itemSlice";
import { useLocation } from 'react-router';

function InfoPages(props) {
    let dispatch = useDispatch();
    return (
        <Card style={{ width: '49rem', height: '45rem' }}>
            <Card.Title className='p-3'>{props.title}</Card.Title>
            <Card.Body>
                <Card.Img className='Infocardimg' variant="top" src={props.image} />
                <Card.Text>{props.price}원</Card.Text>
                <div className='d-flex'>
                    <button className='w-50 border-0 p-3 mb-2 bg-success text-white'>구매</button>
                    {/* <button className='w-50 border-0 p-3 mb-2 bg-secondary text-white'>장바구니</button> */}
                    <button className='w-50 border-0 p-3 mb-2 bg-secondary text-white' onClick={()=>{
                    dispatch(addItem({
                        title:props.title,
                        image:props.image,
                        link:props.link,
                        lprice:props.price
                        }))
                        }}>장바구니</button>
                </div>
            </Card.Body>
        </Card>

    );
}

export default InfoPages;