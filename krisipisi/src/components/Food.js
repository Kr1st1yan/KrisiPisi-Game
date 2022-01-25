import { useState, useEffect } from "react";
import toStr from "./ToString";

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

    const checkCoord = (i) => {
        return (
            foodCoordinates[i][0] >= props.mouseCoordinates[0][0] &&
            foodCoordinates[i][1] >= props.mouseCoordinates[0][1] &&
            foodCoordinates[i][0] <= props.mouseCoordinates[2][0] &&
            foodCoordinates[i][1] <= props.mouseCoordinates[2][1]
        );
    };

    const upperLeftCoord = checkCoord(0);
    const upperRightCoord = checkCoord(3);
    const bottomLeftCoord = checkCoord(1);
    const bottomRightCoord = checkCoord(2);

    const getBinaryMultiplication = (count = 0, arr = []) => {
        const newArr = [
            true,
            upperLeftCoord,
            upperRightCoord,
            bottomLeftCoord,
            bottomRightCoord,
        ];

        if (count === 0) {
            return newArr.reduce((a, b) => a * b);
        }

        for (let x = count - 1; x >= 0; x--) {
            newArr[arr[x]] = !newArr[arr[x]];
        }

        return newArr.reduce((a, b) => a * b);
    };
    const getAllPossibleCornerCases = (indices = 2) => {
        if (indices === 2) {
            let x1 = getBinaryMultiplication(0, []);
            let x2 = getBinaryMultiplication(1, [4]);
            let x3 = getBinaryMultiplication(1, [3]);
            let x4 = getBinaryMultiplication(2, [3, 4]);
            let x5 = getBinaryMultiplication(1, [2]);
            let x6 = getBinaryMultiplication(2, [2, 4]);
            let x7 = getBinaryMultiplication(2, [2, 3]);
            let x8 = getBinaryMultiplication(1, [1]);
            let x9 = getBinaryMultiplication(2, [1, 4]);
            let x10 = getBinaryMultiplication(2, [1, 3]);
            let x11 = getBinaryMultiplication(2, [1, 2]);

            return (
                x1 || x2 || x3 || x4 || x5 || x6 || x7 || x8 || x9 || x10 || x11
            );
        } else {
        }
    };

    const res = getAllPossibleCornerCases();
    useEffect(() => {
        const update = () => {
            console.log(res);

            if (res) {
                console.log("az");
                console.log(foodCoordinates);
                console.log(props.mouseCoordinates);
                console.log(props.mouseSpeed);

                let x = Math.floor(Math.random() * 1000);
                let y = Math.floor(Math.random() * 1000);

                props.setMouseSpeed(props.mouseSpeed - 0.5);
                setFoodCoordinates(coordFunc([x, y]));
            }
        };

        let myInterval = setInterval(update, 100);

        return () => {
            clearInterval(myInterval);
        };
    });

    return <path d={toStr(foodCoordinates)} fill="brown" />;
};

{
    /* <path d="M 200,200, 200,210 210,210 210,200 Z" fill="brown" /> */
}

export default Food;
