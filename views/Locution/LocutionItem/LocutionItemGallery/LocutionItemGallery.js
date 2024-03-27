import { useRef } from "react";

import { LocutionDescription } from "../styles";

import { GalleryContainer, GallerySlider, GalleryItemContainer, GallerySliderContainer, DotsContainer, Arrow, Dot  } from './styles';

export const LocutionItemGallery = ({ media }) => {
    const sliderRef = useRef(null);

    const onDotClick = (itemIndex) => {
        sliderRef.current.scrollLeft = 409 * itemIndex;
    }

    const onRightClick = () => {
        sliderRef.current.scrollLeft += 409;
    };

    const onLeftClick = () => {
        sliderRef.current.scrollLeft -= 409;
    };

    const galleryItems = media.map((mediaElement, i) => {
        const { description, file } = mediaElement.fields;

        const { contentType, url } = file;

        const isAudio = contentType.includes("audio");
        const isImage = contentType.includes("image");

        let galleryItemContent;

        if (isAudio)
            galleryItemContent = (
                <>
                    <audio controls>
                        <source src={url} type={contentType} />
                    </audio>
                    <LocutionDescription>{description}</LocutionDescription>
                </>
            );

        if (isImage)
            galleryItemContent = (
                <>
                    <img src={url} alt={description} />
                    <LocutionDescription>{description}</LocutionDescription>
                </>
            );

        return <GalleryItemContainer key={i}>
            {galleryItemContent}
        </GalleryItemContainer>
    });

    return (
        <>
        <GalleryContainer>
            <GallerySliderContainer>
                <GallerySlider ref={sliderRef}>{galleryItems}</GallerySlider>
            </GallerySliderContainer>
        </GalleryContainer>
        <DotsContainer>
            <Arrow onClick={onLeftClick} src="/anterior.svg" alt="Anterior" />
            {
                media.map((_, i) => {
                    return  <Dot key={i} onClick={() => onDotClick(i)} />;
                })
            }
            <Arrow onClick={onRightClick} src="/siguiente.svg" alt="Siguiente" />
        </DotsContainer>
        </>
        
    );
};
