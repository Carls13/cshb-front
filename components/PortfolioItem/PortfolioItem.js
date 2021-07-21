import {
    Card,
    Image,
    Title,
    Description,
    PortfolioLink
} from './styles';

import { useRouter } from 'next/router';

export const PortfolioItem = ({ portfolioItem }) => {
    const { description, link, preview, title } = portfolioItem;

    const router = useRouter();

    const handleItemClick = () => {
        const slug = title.replace(" ", "-").toLowerCase();

        router.push("/portfolio/" + slug);
    }

    return (
        <Card onClick={handleItemClick}>
            <Image src={preview} alt={title} title={title} loading="lazy" />
            <Title>{title}</Title>
            <Description>{description.split(".")[0]}</Description>
            <PortfolioLink href={link} target="_blank">Visitar sitio</PortfolioLink>
        </Card>
    );
};