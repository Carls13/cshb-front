import { ArticlesGrid } from "./ArticlesGrid/ArticlesGrid";
import { Presentation } from "./Presentation/Presentation";
import { Highlights } from "./Highlights/Highlights";
import { Services } from "./Services/Services";
import { CallToAction } from "./CallToAction/CallToAction";

export const Index = ({ highlights, blog }) => {
    return (
        <>
            <Presentation />
            <Services />
            <Highlights highlights={highlights} />
            <CallToAction />
            <ArticlesGrid articles={blog} />
        </>
    );
};