import "./App.css";
import ViewBox from "./components/ViewBox";
import HighscoreTable from "./components/HighscoreTable";
import { useState } from "react";

function App() {
    const [usernameScore, setUsernameScore] = useState([]);
    const [score, setScore] = useState(0);

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
                <p
                    style={{
                        color: "red",
                        fontWeight: "bold",
                    }}
                >
                    Your score is: {score}
                </p>

                <p
                    style={{
                        color: "blue",
                        fontWeight: "bold",
                    }}
                >
                    Game rules:
                </p>
                <p
                    style={{
                        color: "black",
                        fontWeight: "bold",
                    }}
                >
                    The mouse follows your cursor and the cat is chasing the
                    mouse. Your goal is to eat as much cheese slices as you can
                </p>
            </div>
            <div
                style={{
                    width: "1000px",
                    height: "1000px",
                    display: "inline-flex",
                    margin: "30px",
                }}
            >
                <ViewBox
                    usernameScore={usernameScore}
                    setUsernameScore={setUsernameScore}
                    score={score}
                    setScore={setScore}
                />
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
                <HighscoreTable userScoresMap={usernameScore} />
            </div>
        </div>
    );
}

export default App;
