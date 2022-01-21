import { useState, useEffect } from "react";
let cursorX = 100;
let cursorY = 100;
const mouseCneterAdjustment = 10;

const Mouse = () => {
    const initialState = [
        [100, 100],
        [100, 120],
        [120, 120],
        [120, 100],
    ];

    const [coordinates, setCoordinates] = useState(initialState);
    const [speed,setSpeed]= useState(15);

    document.onmousemove = (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
    };

    const str = function () {
        let cords = "M ";
        coordinates.forEach((cord) => (cords += ` ${cord[0]},${cord[1]}`));

        return (cords += " Z");
    };

    const move = () => {
        let mouseX = 0;
        let mouseY = 0;
        let moveX = 0;
        let moveY = 0;

        mouseX = coordinates[0][0] + mouseCneterAdjustment;
        mouseY = coordinates[0][1] + mouseCneterAdjustment;

        const xPosReached = Math.abs(mouseX - cursorX) < speed / 2; 

        if (!xPosReached && mouseX - cursorX < 0) {
            moveX = speed;
        } else if (!xPosReached && mouseX - cursorX > 0) {
            moveX = -speed;
        }

        const yPosReached = Math.abs(mouseY - cursorY) < speed / 2; 

        if (!yPosReached && mouseY - cursorY > 0) {
            moveY = -speed;
        } else if (!yPosReached && mouseY - cursorY < 0) {
            moveY = speed;
        }

        const newArr = coordinates.map((arr) => {
            mouseX = arr[0] + moveX;
            mouseY = arr[1] + moveY;

            return [mouseX, mouseY];
        });

        if (moveX !== 0 || moveY !== 0) {
            setCoordinates(newArr);
        }
    };

    useEffect(() => {
        let myInterval = setInterval(move, 100);

        return () => {
            clearInterval(myInterval);
        };
    });

    return <path d={str()} fill="grey" />;
};

export default Mouse;
