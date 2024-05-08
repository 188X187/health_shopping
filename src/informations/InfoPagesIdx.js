import React, { useState, useEffect } from 'react';
// import InfoPages from './InfoPages';
import BasicExample from './InfoPages1';

export default function InfoPagesIdx() {
    const [pages, setPages] = useState([]);
    const clientId = "PcwiSv9nAo8FqeP6ICkA";
    const clientSecret = "_RNOVVtPLD";

    useEffect(() => {
        fetch(
            "/v1/search/shop?query=운동&filter=used:false&sort=sim&display=10&start=1", {
            method: "GET",
            headers: {
                "X-Naver-Client-Id": clientId,
                "X-Naver-Client-Secret": clientSecret,
            },
        }
        )
            .then((response) => response.json())
            .then((json) => console.log(json));
    }, []);

    return (
        <>
            {pages.map((item) => (
                <BasicExample
                    image={item.image}
                    title={item.title}
                />
            ))}
        </>
    );
}