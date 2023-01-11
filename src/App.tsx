import "./App.css";
import { BoxDemo } from "./components/BoxDemo";
import { MinimalSprinklesDemo } from "./components/MinimalSprinklesDemo";

function App() {
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ display: "flex", flexDirection: "column", margin: "auto" }}>
                    <BoxDemo />
                    <MinimalSprinklesDemo />
                </div>
            </div>
        </div>
    );
}

export default App;
