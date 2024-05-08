import React, { useState, useEffect } from 'react';
import InfoPages from './InfoPages1';
// import InfoPages from './InfoPages';

export default function InfoPagesIdx() {
    const [pages, setPages] = useState([]);
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

    useEffect(() => {
        fetch(
            "/v1/search/shop?query=운동&filter=used:false&display=30&start=1", {
            method: "GET",
            headers: {
                "X-Naver-Client-Id": clientId,
                "X-Naver-Client-Secret": clientSecret,
            },
        }
        )
            .then((response) => response.json())
            .then((json) => (console.log(json)));
    }, []);

    const 서버데이터 = {
        brand:"헬스럽",
        category1:"스포츠/레저",
        category2:"헬스",
        category3:"헬스소품",
        category4:"완력기",
        hprice:"",
        image:"https://shopping-phinf.pstatic.net/main_3519206/35192060763.20221024172753.jpg",
        link:"https://search.shopping.naver.com/gate.nhn?id=35192060763",
        lprice:"15900",
        maker: "",
        mallName:"네이버",
        productId:"35192060763",
        productType:"1",
        title:"헬스럽 추감기 리스트롤러 전완근 <b>운동</b>기구 팔뚝"
    }
    
    return (
        <>

            <InfoPages
            image={서버데이터.image}
            title={서버데이터.title}
            price={서버데이터.lprice}
            />

        </>
    );
}