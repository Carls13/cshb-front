import styled from "styled-components";

export const GalleryContainer = styled.div`
    position: relative;
    display: flex;
    width: 400px;
`; 

export const LeftArrow = styled.span`
    width: 30px;
    height: 30px;
    font-size: 24px;
    color: white;
    left: -5px;
    top: calc(50% - 5px);
    position: absolute;
`;

export const GallerySliderContainer = styled.div`
    width: 100%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
`;

export const GallerySlider = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    overscroll-behavior-x: contain;
    overflow-x: hidden;
    scroll-snap-type: x;
    padding: 10px;
    width: auto;
    max-width: 100%;
    scroll-behavior: smooth;
`;

export const RightArrow = styled.span`
    width: 30px;
    height: 30px;
    font-size: 24px;
    color: white;
    left: calc(100% - 5px);
    top: calc(50% - 5px);
    position: absolute;
`;

export const GalleryItemContainer = styled.div`
    min-width: 400px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    scroll-snap-align: center;
`;

export const DotsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    img, div {
        margin: 0 5px;
        cursor: pointer;
    }
`;

export const Arrow = styled.img`
`;

export const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#44D985' : 'white'};

    &:hover {
        background-color:#44D985;
    }
`;