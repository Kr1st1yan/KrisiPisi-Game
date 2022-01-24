import { useState, useEffect } from "react";
import toStr from "./ToString";
import move from "./Move";

const centerAdjustment = 10;
const speed = 5;

const Cat = (props) => {
    const initialState = [
        [800, 800],
        [800, 865],
        [840, 865],
        [840, 800],
    ];

    const [catCoordinates, setCatCoordinates] = useState(initialState);

    useEffect(() => {
        const update = () => {
            let returnedValue = move(
                catCoordinates,
                props.mouseCoordinates[0][0],
                props.mouseCoordinates[0][1],
                speed,
                centerAdjustment
            );

            if (
                returnedValue[0][0] !== catCoordinates[0][0] ||
                returnedValue[0][1] !== catCoordinates[0][1]
            ) {
                setCatCoordinates(returnedValue);
            }
        };

        let myInterval = setInterval(update, 100);

        return () => {
            clearInterval(myInterval);
        };
    });

    return <path d={toStr(catCoordinates)} fill="lightblue" />;
};

export default Cat;
