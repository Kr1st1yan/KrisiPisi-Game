import "./App.css";
import ViewBox from "./components/ViewBox";

function App() {

    return (
        <div className="App">
            <div
                style={{
                    width: "1000px",
                    height: "1000px",
                    // display: "inline-flex",
                    // margin: "30px",
                }}
            >
                <ViewBox />
            </div>
        </div>
    );
}

export default App;
