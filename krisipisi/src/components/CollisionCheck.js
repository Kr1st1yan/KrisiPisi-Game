const collisionCheck = (target1Coord,target2Coord) =>{

    let checker = false;

    const cornerCheck = (corner) => {

        return (corner[0] > target2Coord[0][0] && corner[0] < target2Coord[2][0] && corner[1] > target2Coord[0][1] && corner[1] < target2Coord[2][1])
    };

    target1Coord.forEach(corner => {
        if(cornerCheck(corner)){
            checker = true;
        }
    });

    return checker;

}

export default collisionCheck;