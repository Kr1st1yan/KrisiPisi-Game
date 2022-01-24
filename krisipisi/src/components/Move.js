const move = (
    currentCordinates,
    targetToReachX,
    targetToReachY,
    speed,
    centerAdjustment
) => {
    let mouseX = 0;
    let mouseY = 0;
    let moveX = 0;
    let moveY = 0;

    mouseX = currentCordinates[0][0] + centerAdjustment;
    mouseY = currentCordinates[0][1] + centerAdjustment;

    console.log(currentCordinates, targetToReachX, targetToReachY);
    const xPosReached = Math.abs(mouseX - targetToReachX) <= speed / 2;

    if (!xPosReached && mouseX - targetToReachX < 0) {
        moveX = speed;
    } else if (!xPosReached && mouseX - targetToReachX > 0) {
        moveX = -speed;
    }

    const yPosReached = Math.abs(mouseY - targetToReachY) <= speed / 2;

    if (!yPosReached && mouseY - targetToReachY > 0) {
        moveY = -speed;
    } else if (!yPosReached && mouseY - targetToReachY < 0) {
        moveY = speed;
    }

    const newArr = currentCordinates.map((arr) => {
        mouseX = arr[0] + moveX;
        mouseY = arr[1] + moveY;

        return [mouseX, mouseY];
    });

    return newArr;
};

export default move;
