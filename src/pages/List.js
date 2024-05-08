import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ListCard from "./ListCard";

function List(props) {
    const [list, setList] = useState([]);
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

    useEffect(() => {
        fetch(
            "/v1/search/shop?query=운동&filter=used:false&display=30&start=1"+props.checkbox, {
            method: "GET",
            headers: {
                "X-Naver-Client-Id": clientId,
                "X-Naver-Client-Secret": clientSecret,
            },
        }
        )
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setList(json.items);
            });
    }, [props.checkbox]);

    return (
        <>
            <Row xs={1} md={3} className="g-4">
                {list.map((item, index) => (
                    <Col key={index}>
                        <ListCard
                            link={item.link}
                            image={item.image}
                            title={item.title.replace(/[<b></b>]/g, '')}
                            price={item.lprice}
                        />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default List;