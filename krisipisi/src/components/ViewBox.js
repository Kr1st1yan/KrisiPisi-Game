import { useState } from "react";
import Field from "./Field";
import Cat from "./Cat";
import Mouse from "./Mouse";
import Food from "./Food";
import Portal from "./Portal";
import _ from "lodash";

const ViewBox = () => {
    
    return (
        <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 1000 1000">
            <Field />
            <Cat />
            <Mouse key={'mouse'}/>
            <Food />
            <Portal />
        </svg>
    );
};
export default ViewBox;
