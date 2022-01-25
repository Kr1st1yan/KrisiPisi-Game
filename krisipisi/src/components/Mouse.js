import { useEffect } from "react";
import move from "./Move";
import toStr from "./ToString";

let cursorX = 100;
let cursorY = 100;
const mouseCenterAdjustment = 10;

const Mouse = (props) => {
    document.onmousemove = (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
    };

    useEffect(() => {
        const update = () => {
            let returnedValue = move(
                props.coordinates,
                cursorX,
                cursorY,
                props.speed,
                mouseCenterAdjustment
            );

            if (
                returnedValue[0][0] !== props.coordinates[0][0] ||
                returnedValue[0][1] !== props.coordinates[0][1]
            ) {
                props.setCoordinates(returnedValue);
            }
        };

        let myInterval = setInterval(update, 100);

        return () => {
            clearInterval(myInterval);
        };
    });

    return <path d={toStr(props.coordinates)} fill="grey" />;
};

export default Mouse;
