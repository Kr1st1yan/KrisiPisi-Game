import { useState,memo } from "react";
import _ from 'lodash';



function Mouse(props){

    let {coordinates, setCoordinates, cursorX, setCursorX, cursorY, setCursorY} = props;
    let svgcoord;
        const str = function () {
            let cords = "M ";
            coordinates.forEach((cord) => (cords += ` ${cord[0]},${cord[1]}`));
    
            console.log("zadavam koordinati");
            return (cords += " Z");
        };


    
    const move = () => {

        let mouseX = 0;
        let mouseY = 0;
        let moveX = 0;
        let moveY = 0;
        // console.log(`X:${x} Y:${y}`);
        // console.log(`X2:${mouseX} Y2:${mouseY}`);
        mouseX = coordinates[0][0];
        mouseY = coordinates[0][1];
    
        //console.log(mouseY - y);
        //console.log(mouseX - x);
        if (mouseX - cursorX < 0) {
            moveX = 1;
        } else if (mouseX - cursorX > 0) {
            moveX = -1;
        }
    
        if (mouseY - cursorY > 0) {
            moveY = -1;
        } else if (mouseY - cursorY < 0) {
            moveY = 1;
        }
        
        const newArr = coordinates.map((arr) => {
            mouseX = arr[0] + moveX;
            mouseY = arr[1] + moveY;
    
            return [mouseX, mouseY];
        });
        if(moveX!==0 || moveY!==0){
            console.log(newArr,coordinates);
            setCoordinates(newArr);
        }

    };

    move();

    return <path d={str()} fill="grey"/>;
};



export default Mouse;

{/* <path d="M 100,100 100,120 120,120 120,100 Z" fill="grey" /> */}