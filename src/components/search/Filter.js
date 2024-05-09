import { useEffect, useState } from "react";
import List from "../../pages/List";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Filter() {
    const [item, setItem] = useState('')
    const [checkbox, setcheckbox] = useState('')

    const [searchItem, setSearchItem] = useState('')
    const [searchClick, setSearchClick] = useState('')

    return (
        <>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => {
                        setSearchItem(e.target.value)
                    }}
                />
                <Button variant="outline-success"
                    onClick={() => {
                        // 검색칸이 빈칸이면 
                        if (searchItem == '') {
                            alert("검색어를 입력해주세요")
                        } else {
                            setSearchClick(searchItem)
                        }
                    }}
                >Search</Button>
            </Form>

            <label>
                <input
                    type="checkbox"
                    onChange={(e) => {
                        if (e.target.checked) {
                            setItem(item+"유기농")
                        } else {
                            setItem(item.replace("유기농", ""))
                        }
                    }}>
                </input>유기농
            </label>

            <label>
                <input
                    type="checkbox"
                    onChange={(e) => {
                        if (e.target.checked) {
                            setItem(item+"다이어트")
                        } else {
                            setItem(item.replace("다이어트", ""))
                        }
                    }}>
                </input>다이어트
            </label>

            <label>
                <input
                    type="checkbox"
                    onChange={(e) => {
                        if (e.target.checked) {
                            setItem(item+"에너지")
                        } else {
                            setItem(item.replace("에너지", ""))
                        }
                    }}>
                </input>에너지
            </label>

            <label>
                <input
                    type="checkbox"
                    onChange={(e) => {
                        if (e.target.checked) {
                            setItem(item+"쉐이커")
                        } else {
                            setItem(item.replace("쉐이커", ""))
                        }
                    }}>
                </input>쉐이커
            </label>

            <label>
                <input
                    type="checkbox"
                    onChange={(e) => {
                        if (e.target.checked) {
                            setItem(item+"헬스용품")
                        } else {
                            setItem(item.replace("헬스용품", ""))
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
            <List searchClick={searchClick} item={item} checkbox={checkbox} />
        </>
    )
}

export default Filter