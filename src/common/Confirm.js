// import { useEffect, useState } from "react";

// function Confirm() {

//     const [data, setData] = useState(null);

//     const clientId = process.env.REACT_APP_CLIENT_ID;
//     const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

//     useEffect(() => {
//         fetch(
//         "/v1/search/shop?query=여성 옷&filter=used:false&sort=sim&display=10&start=11",
//         {
//             method: "GET",
//             headers: {
//             "X-Naver-Client-Id": clientId,
//             "X-Naver-Client-Secret": clientSecret,
//             },
//         }
//         )
//         .then((response) => response.json())
//         .then((json) => setData(json));
//     }, []);


//     return data;
// }

// export default Confirm;
