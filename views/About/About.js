import { AboutPresentation } from "./AboutPresentation/AboutPresentation";
import { Education } from "./Education/Education";
import { Technologies } from "./Technologies/Technologies";

export const AboutView = () => {
    return (
        <>
            <AboutPresentation />
            <Technologies />
            <Education />
        </>
    );
};