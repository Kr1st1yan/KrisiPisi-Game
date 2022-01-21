import "./App.css";
import ViewBox from "./components/ViewBox";

function App() {

    //let mouse = document.getElementById('4');

    // document.addEventListener('mousemove', function(e) {
    //     let x = e.clientX;
    //     let y = e.clientY;
    //     console.log(x);
    //     console.log(y);
    //     mouse.style.left = x + "px";
    //     mouse.style.top = y + "px";
    // })

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
