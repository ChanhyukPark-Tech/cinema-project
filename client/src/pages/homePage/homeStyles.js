import Slider from "react-slick";
import styled from 'styled-components';


export const Container = styled.div`
  overflow: hidden;
  height: 50vh;
`;

export const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
    height: 40vh;
  }
`;

export const ImageContainer = styled.div`
  height: 40vh;
`;

export const Image = styled.img`
    width: 100%;
  height: 40vh;
`;