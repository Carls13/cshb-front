import {
    Card,
    Image,
    Title,
    Description,
    PortfolioLink
} from './styles';

import { useRouter } from 'next/router';

export const PortfolioItem = ({ portfolioItem }) => {
    const { description, preview, title } = portfolioItem;

    const router = useRouter();

    const handleItemClick = () => {
        const slug = title.replace(" ", "-").toLowerCase();

        router.push("/portfolio/" + slug).then(() => window.scrollTo(0, 0));
    }

    return (
        <Card onClick={handleItemClick}>
            <Image src={preview} alt={title} title={title} loading="lazy" />
            <Title>{title}</Title>
            <Description>{description.split(".")[0]}</Description>
            <PortfolioLink>Ver más</PortfolioLink>
        </Card>
    );
};