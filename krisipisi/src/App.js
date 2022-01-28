import "./App.css";
import ViewBox from "./components/ViewBox";
import HighscoreTable from "./components/HighscoreTable";
function App() {
    return (
        <div
            className="App"
            style={{
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <div
                style={{
                    width: "450px",
                    height: "1030px",
                    backgroundColor: "burlywood",
                    borderColor: "purple",
                    borderStyle: "solid",
                }}
            >
                Description
            </div>
            <div
                style={{
                    width: "1000px",
                    height: "1000px",
                    display: "inline-flex",
                    margin: "30px",
                }}
            >
                <ViewBox />
            </div>
            <div
                style={{
                    width: "450px",
                    height: "1030px",
                    backgroundColor: "burlywood",
                    borderColor: "purple",
                    borderStyle: "solid",
                }}
            >
                <HighscoreTable
                    userScoresMap={[
                        { username: "az", score: 50 },
                        { username: "ti", score: 40 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                        { username: "pesho", score: 1000 },
                    ]}
                />
            </div>
        </div>
    );
}

export default App;
