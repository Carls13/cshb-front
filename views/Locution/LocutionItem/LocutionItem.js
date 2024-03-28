import { LocutionItemGallery } from "./LocutionItemGallery/LocutionItemGallery";
import {
    LocutionItemContainer,
    LocutionTitle,
    LocutionDescription,
    TypeTag
} from "./styles";

export const LocutionItem = ({ locutionItem }) => {
    const { description, media, title, type } = locutionItem;
    const { description: audioDescription, file } = media[0]?.fields;
    const { contentType, url } = file;

    const hasMultipleMedia = media.length > 1;

    return (
        <LocutionItemContainer>
            <LocutionTitle>{title}</LocutionTitle>
            <LocutionDescription>{description}</LocutionDescription>
            {hasMultipleMedia ? (
                <LocutionItemGallery media={media} />
            ) : (
                <>
                    <audio controls>
                        <source src={url} type={contentType} />
                    </audio>
                    <LocutionDescription>
                        {audioDescription}
                    </LocutionDescription>
                </>
            )}
            <TypeTag>
                <span>{type}</span>
            </TypeTag>
        </LocutionItemContainer>
    );
};
