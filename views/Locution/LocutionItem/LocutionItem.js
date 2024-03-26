import { LocutionItemContainer, LocutionTitle, LocutionDescription, TypeTag } from './styles';

export const LocutionItem = ({ locutionItem }) => {
    const { description, media, title, type } = locutionItem;

    const { description: audioDescription, file } = media[0]?.fields;

    const { contentType, url } = file;

    return (
        <LocutionItemContainer>
            <LocutionTitle>{title}</LocutionTitle>
            <LocutionDescription>{description}</LocutionDescription>
            <audio controls>
                <source src={url} type={contentType} />
            </audio>
            <TypeTag><span>{type}</span></TypeTag>
        </LocutionItemContainer>
    )
}