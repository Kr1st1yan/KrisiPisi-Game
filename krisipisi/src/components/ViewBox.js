import { useState } from "react";
import Field from "./Field";
import Cat from "./Cat";
import Mouse from "./Mouse";
import Food from "./Food";
import Portal from "./Portal";
import _ from "lodash";

const ViewBox = () => {
    const initialState = [
        [100, 100],
        [100, 120],
        [120, 120],
        [120, 100],
    ];
    const [coordinates, setCoordinates] = useState(initialState);
    const [cursorX, setCursorX]= useState(0);
    const [cursorY, setCursorY]= useState(0);
    document.onclick = (e) => {
        setCursorX(e.clientX);
        setCursorY(e.clientY);
        console.log("clicked");
    }
    console.log("hoi");
    return (
        <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 1000 1000">
            <Field />
            {/* <Cat /> */}
            <Mouse key={'mouse'} coordinates={coordinates} setCoordinates={setCoordinates} cursorX={cursorX} setCursorX={setCursorX} cursorY={cursorY} setCursorY={setCursorY}/>
            {/* <Food />
            <Portal /> */}
        </svg>
    );
};
export default ViewBox;
