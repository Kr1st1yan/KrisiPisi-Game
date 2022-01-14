import Field from "./Field";
import Cat from "./Cat";
import Mouse from "./Mouse";

const ViewBox = () => {
    return (
        <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 1000 1000">
            <Field />
            <Cat />
            <Mouse />
        </svg>
    );
};

export default ViewBox;