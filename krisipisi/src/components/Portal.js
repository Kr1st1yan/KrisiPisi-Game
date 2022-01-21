const Portal = () => {
    const portal1 = (
        <line x1="4" y1="4" x2="80" y2="4" stroke="green" strokeWidth="3" />
    );
    const portal2 = (
        <line
            x1="996"
            y1="996"
            x2="920"
            y2="996"
            stroke="green"
            strokeWidth="3"
        />
    );
    const portal3 = (
        <line x1="4" y1="600" x2="4" y2="676" stroke="blue" strokeWidth="3" />
    );
    const portal4 = (
        <line
            x1="996"
            y1="400"
            x2="996"
            y2="476"
            stroke="blue"
            strokeWidth="3"
        />
    );
    let portalArr = [portal1, portal2, portal3, portal4];

    return portalArr;
};

export default Portal;