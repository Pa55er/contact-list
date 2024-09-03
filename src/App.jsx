import "./styles/App.css";
import InputCon from "./components/InputCon";
import ListArea from "./components/ListArea";
import { useState } from "react";

function App() {
    const dataContactList =
        JSON.parse(localStorage.getItem("contactList")) || [];
    const [contactLists, setContactLists] = useState(dataContactList);

    return (
        <div className="App">
            <h1>연락처 리스트</h1>
            <article>
                <InputCon
                    contactLists={contactLists}
                    setContactLists={setContactLists}
                />
                <ListArea
                    contactLists={contactLists}
                    setContactLists={setContactLists}
                />
            </article>
        </div>
    );
}

export default App;
