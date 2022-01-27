import collisionCheck from "./CollisionCheck";

const Portal = (props) => {

    const portal1Corrdinates = [[80,-20],[156,-20],[156,5],[80,5]];
    const portal2Corrdinates = [[800,996],[876,996],[876,1020],[800,996]];
    const portal3Corrdinates = [[-20,800],[4,800],[4,876],[-20,876]];
    const portal4Corrdinates = [[996,200],[1020,200],[1020,276],[996,276]];
    
     if (collisionCheck(props.mouseCoordinates,portal1Corrdinates) === true) {
        props.setCoordinates([[828.5, 973.5],
        [828.5, 993.5],
        [848.5, 993.5],
        [848.5, 973.5]]);
     }else if (collisionCheck(props.mouseCoordinates,portal2Corrdinates) === true) {
        props.setCoordinates([[111.5, 5],
        [111.5, 25],
        [131.5, 25],
        [131.5, 5]]);
     }else if(collisionCheck(props.mouseCoordinates,portal3Corrdinates) === true){
        props.setCoordinates([[973, 234],
        [973, 254],
        [993, 254],
        [993, 234]]);
     }else if(collisionCheck(props.mouseCoordinates,portal4Corrdinates) === true){
        props.setCoordinates([[7.5, 824.5],
        [7.5, 844.5],
        [27.5, 844.5],
        [27.5, 824.5]]);
     }
    

    const portal1 = (
        <line 
            x1={portal1Corrdinates[3][0]} 
            y1={portal1Corrdinates[3][1]} 
            x2={portal1Corrdinates[2][0]}  
            y2={portal1Corrdinates[2][1]} 
            stroke="green" 
            strokeWidth="3" />
    );
    const portal2 = (
        <line
            x1={portal2Corrdinates[3][0]} 
            y1={portal2Corrdinates[3][1]} 
            x2={portal2Corrdinates[2][0]} 
            y2={portal2Corrdinates[3][1]} 
            stroke="green"
            strokeWidth="3"
        />
    );
    const portal3 = (
        <line 
            x1={portal3Corrdinates[1][0]} 
            y1={portal3Corrdinates[1][1]} 
            x2={portal3Corrdinates[2][0]}  
            y2={portal3Corrdinates[2][1]} 
            stroke="blue"
            strokeWidth="3" />
    );
    const portal4 = (
        <line
            x1={portal4Corrdinates[0][0]} 
            y1={portal4Corrdinates[0][1]} 
            x2={portal4Corrdinates[3][0]} 
            y2={portal4Corrdinates[3][1]} 
            stroke="blue"
            strokeWidth="3"
        />
    );

    let portalArr = [portal1, portal2, portal3, portal4];

    return portalArr;
};

export default Portal;
