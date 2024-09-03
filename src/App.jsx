import "./styles/App.css";
import InputCon from "./components/InputCon";
import ListArea from "./components/ListArea";

function App() {
    return (
        <>
            <div className="App">
                <h1>연락처 리스트</h1>
                <article>
                    <InputCon />
                    <ListArea />
                </article>
            </div>
        </>
    );
}

export default App;
