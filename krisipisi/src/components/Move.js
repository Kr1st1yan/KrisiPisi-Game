const move = (
    currentCordinates,
    targetToReachX,
    targetToReachY,
    speed,
    size
) => {
    let mouseX = 0;
    let mouseY = 0;
    let moveX = 0;
    let moveY = 0;

    mouseX = currentCordinates[0][0] + size[0] / 2;
    mouseY = currentCordinates[0][1] + size[1] / 2;

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

    if (mouseX + moveX >= 1000 - size[0] / 2) {
        moveX = 1000 - size[0] / 2 - mouseX;
    }else if (mouseX + moveX <= size[0] / 2) {
        moveX = size[0] / 2 - mouseX;
    }

    if (mouseY + moveY >= 1000 - size[1] / 2) {
        moveY = 1000 - size[1] / 2 - mouseY;
    }else if (mouseY + moveY <= size[1] / 2) {
        moveY = size[1] / 2 - mouseY;
    }

    const newArr = currentCordinates.map((arr) => {
        mouseX = arr[0] + moveX;
        mouseY = arr[1] + moveY;

        return [mouseX, mouseY];
    });

    return newArr;
};

export default move;
