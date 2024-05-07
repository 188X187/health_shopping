import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ListCard from "./ListCard";

function List() {
    const [list, setList] = useState([]);
    const clientId = "yqsgNZqGoDM7ydJdAEvd";
    const clientSecret = "hDwanueb2F";

    useEffect(() => {
        fetch(
            "/v1/search/shop?query=운동&filter=used:false&sort=sim&display=30&start=1", {
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
    }, []);

    return (
        <>
            <Row xs={1} md={3} className="g-4">
                {list.map((item, index) => (
                    <Col key={index}>
                        <ListCard
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