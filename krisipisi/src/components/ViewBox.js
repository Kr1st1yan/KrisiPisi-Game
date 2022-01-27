import { useState } from "react";
import Field from "./Field";
import Cat from "./Cat";
import Mouse from "./Mouse";
import Food from "./Food";
import Portal from "./Portal";

const ViewBox = () => {
    const initialState = [
        [100, 100],
        [100, 120],
        [120, 120],
        [120, 100],
    ];

    const mouseSizeState = [20, 20];
    const catSizeState = [40, 65];

    const [coordinates, setCoordinates] = useState(initialState);
    const [mouseSpeed, setMouseSpeed] = useState(15);
    const [mouseSize, setMouseSize] = useState(mouseSizeState);
    const [catSize, setCatSize] = useState(catSizeState)

    return (
        <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 1000 1000">
            <Field />
            <Mouse
                key={"mouse"}
                coordinates={coordinates}
                speed={mouseSpeed}
                setCoordinates={setCoordinates}
                mouseSize={mouseSize}
            />
            <Cat
                key={"cat"}
                mouseCoordinates={coordinates}s
                mouseSpeed={mouseSpeed - 10}
                setMouseSpeed = {setMouseSpeed}
                catSize={catSize}
            />
            <Food
                key={"food"}
                mouseCoordinates={coordinates}
                mouseSpeed={mouseSpeed}
                setMouseSpeed={setMouseSpeed}
            />
            <Portal
                key={"portal"}
                mouseCoordinates={coordinates}
                setCoordinates={setCoordinates}
                // mouseSize={mouseSize}
            />
        </svg>
    );
};
export default ViewBox;
