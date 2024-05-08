import { useEffect, useState } from "react";
import List from "../../pages/List";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Filter() {
    const [item, setItem] = useState('')
    const [checkbox, setcheckbox] = useState('')

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    onChange={(e) => {
                        if (e.target.checked) {
                            let copy = item;
                            copy = copy + "유기농"
                            setItem(copy)
                        } else {
                            let copy = item.replace("유기농", "");
                            setItem(copy)
                        }
                    }}>
                </input>유기농
            </label>

            <label>
                <input
                    type="checkbox"
                    onChange={(e) => {
                        if (e.target.checked) {
                            let copy = item;
                            copy = copy + "다이어트"
                            setItem(copy)
                        } else {
                            let copy = item.replace("다이어트", "");
                            setItem(copy)
                        }
                    }}>
                </input>다이어트
            </label>

            <label>
                <input
                    type="checkbox"
                    onChange={(e) => {
                        if (e.target.checked) {
                            let copy = item;
                            copy = copy + "게이너"
                            setItem(copy)
                        } else {
                            let copy = item.replace("게이너", "");
                            setItem(copy)
                        }
                    }}>
                </input>게이너
            </label>

            <label>
                <input
                    type="checkbox"
                    onChange={(e) => {
                        if (e.target.checked) {
                            let copy = item;
                            copy = copy + "아미노산"
                            setItem(copy)
                        } else {
                            let copy = item.replace("아미노산", "");
                            setItem(copy)
                        }
                    }}>
                </input>아미노산
            </label>

            <label>
                <input
                    type="checkbox"
                    onChange={(e) => {
                        if (e.target.checked) {
                            let copy = item;
                            copy = copy + "다이어트"
                            setItem(copy)
                        } else {
                            let copy = item.replace("다이어트", "");
                            setItem(copy)
                        }
                    }}>
                </input>다이어트
            </label>

            <label>
                <input
                    type="checkbox"
                    onChange={(e) => {
                        if (e.target.checked) {
                            let copy = item;
                            copy = copy + "에너지"
                            setItem(copy)
                        } else {
                            let copy = item.replace("에너지", "");
                            setItem(copy)
                        }
                    }}>
                </input>에너지
            </label>

            <label>
                <input
                    type="checkbox"
                    onChange={(e) => {
                        if (e.target.checked) {
                            let copy = item;
                            copy = copy + "쉐이커"
                            setItem(copy)
                        } else {
                            let copy = item.replace("쉐이커", "");
                            setItem(copy)
                        }
                    }}>
                </input>쉐이커
            </label>

            <label>
                <input
                    type="checkbox"
                    onChange={(e) => {
                        if (e.target.checked) {
                            let copy = item;
                            copy = copy + "헬스용품"
                            setItem(copy)
                        } else {
                            let copy = item.replace("헬스용품", "");
                            setItem(copy)
                        }
                    }}>
                </input>헬스용품
            </label>

            <label>
                <input
                    type="checkbox"
                    onChange={(e) => {
                        if (e.target.checked) {
                            setcheckbox("&sort=date")
                        } else {
                            setcheckbox('')
                        }
                    }}>
                </input>최신순
            </label>
            <List item={item} checkbox={checkbox} />
        </>
    )
}

export default Filter