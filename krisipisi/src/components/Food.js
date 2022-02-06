import { useState, useEffect } from "react";
import toStr from "./ToString";
import collisionCheck from "./CollisionCheck";

const Food = (props) => {
    let a = 10;

    const coordFunc = ([x, y]) => {
        const x1 = x - a;
        const x2 = x;
        const y1 = y - a;
        const y2 = y;
        return [
            [x1, y1],
            [x1, y2],
            [x2, y2],
            [x2, y1],
        ];
    };

    const initialState = coordFunc([210, 210]);

    const [foodCoordinates, setFoodCoordinates] = useState(initialState);

    useEffect(() => {
        const update = () => {
            if (collisionCheck(foodCoordinates, props.mouseCoordinates)) {
                let x = Math.floor(Math.random() * 900) + 50;
                let y = Math.floor(Math.random() * 900) + 50;

                if (props.mouseSpeed >= 4.5) {
                    props.setMouseSpeed(props.mouseSpeed - 0.5);
                }

                props.setScore(props.score + 10);
                setFoodCoordinates(coordFunc([x, y]));
            }
        };

        let myInterval = setInterval(update, 100);

        return () => {
            clearInterval(myInterval);
        };
    });

    return <path d={toStr(foodCoordinates)} fill="gold" />;
};

export default Food;
