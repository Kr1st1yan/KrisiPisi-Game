import { useState, useEffect } from "react";
import toStr from "./ToString";
import move from "./Move";
import collisionCheck from "./CollisionCheck";

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
            if (collisionCheck(props.mouseCoordinates, catCoordinates)) {
                alert("Game over!");
                props.setCoordinates([
                    [100, 100],
                    [100, 120],
                    [120, 120],
                    [120, 100],
                ]);
                setCatCoordinates(initialState);
                
            }else{

                let returnedValue = move(
                    catCoordinates,
                    props.mouseCoordinates[0][0],
                    props.mouseCoordinates[0][1],
                    speed,
                    props.catSize,
                );
    
                if (
                    returnedValue[0][0] !== catCoordinates[0][0] ||
                    returnedValue[0][1] !== catCoordinates[0][1]
                ) {
                    setCatCoordinates(returnedValue);
                }
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
