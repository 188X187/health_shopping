import { useEffect, useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Searched from './Searched';

function Searching() {
    const [searchText, setSearchText] = useState('')
    const [searchItem, setSearchItem] = useState('')
    const [input, setInput] = useState(false)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setSearchText(json))
    }, [])

    return (
        <Stack gap={3}>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => {
                        setSearchItem(e.target.value)
                    }}
                // ↓↓↓ 디버깅용 ↓↓↓
                // console.log(e.target.value); 
                />
                <Button variant="outline-success" onClick={() => {
                    // 검색칸이 빈칸이면 
                    if (searchItem == '') {
                        alert("검색어를 입력해주세요")
                        // 검색칸이 빈칸이 아니면 
                    } else {
                        setInput(!input);
                    }
                }}
                >Search</Button>
            </Form>

            {input == true ? <Searched searchText={searchText} searchItem={searchItem} /> : null}
            <div className="p-2">Third item</div>
        </Stack>
    )
}


export default Searching