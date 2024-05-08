import Carousel from 'react-bootstrap/Carousel';
import List from './List';

function Home() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <CarouselImage1 text="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselImage2 text="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselImage3 text="Third slide" />
                </Carousel.Item>
            </Carousel>

            <Carousel>
                <Carousel.Item>
                    <List />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

function CarouselImage1() {
    return (
        <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/group-of-people-working-out-together-outdoors_23-2149891452.jpg"
        />
    )
}

function CarouselImage2() {
    return (
        <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1365886686/ko/%EC%82%AC%EC%A7%84/%EC%A3%BC%EC%A0%84%EC%9E%90-%EB%B2%A8%EB%A1%9C-%EC%9A%B4%EB%8F%99%ED%95%98%EB%8A%94-%EC%97%AC%EC%9E%90%EC%9D%98-%EC%83%B7.jpg?s=612x612&w=0&k=20&c=-BgD_T7XsgiisqQmwSuy3FvuTUHkKoF5fSJ2Re3aZKA="
        />
    )
}

function CarouselImage3() {
    return (
        <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2016/11/14/03/38/achieve-1822503_1280.jpg"
        />
    )
}

export default Home