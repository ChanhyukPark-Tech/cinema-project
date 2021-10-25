import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Container, Image, ImageContainer, StyledSlider} from "./homeStyles";
const imgUrl = require('../../images/mac.jpg')

function HomePage(props) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000, // 1000ms
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    };


    const items = [
        { id: 1, url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsupport.apple.com%2Fko-kr%2FHT204899&psig=AOvVaw0N9dO_4q9c3IEdSInGLur3&ust=1635167023231000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiQsf6N4_MCFQAAAAAdAAAAABAE" },
        { id: 2, url: "https://www.parallels.com/fileadmin/res/img/pd/2021/upgrade/m1-battery.jpg" },
        { id: 3, url: "https://www.lifewire.com/thmb/QHSOPpSNzatEk0A01KZa3J22fCQ=/1500x1049/filters:no_upscale():max_bytes(150000):strip_icc()/457318552-resize-56a5d4c63df78cf7728a0e5c.jpg" },
    ];
    return (
        <Container>
            <StyledSlider {...settings}
            >
                {items.map(item => {
                    return (
                        <div key={item.id}>
                            <ImageContainer>
                                <Image src={item.url} />
                            </ImageContainer>
                        </div>
                    );
                })}
            </StyledSlider>
        </Container>


    );
}

export default HomePage;