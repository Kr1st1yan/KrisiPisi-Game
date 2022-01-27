const toStr = function (coordinates) {
    let cords = "M ";
    coordinates.forEach((cord) => (cords += ` ${cord[0]},${cord[1]}`));
    return (cords += " Z");
};

export default toStr;
