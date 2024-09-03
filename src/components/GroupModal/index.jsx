import { useRef } from "react";

export default function GroupModal({ lists, setLists, setIsClickAddGp }) {
    const inputRef = useRef();

    const handleCloseBtn = () => {
        setIsClickAddGp((prev) => !prev);
    };

    const handleKeyup = (e) => {
        if (e.key === "Enter") {
            const target = e.target.value.trim();
            if (target === "") {
                alert("새 그룹 이름을 입력해주세요");
                inputRef.current.focus();
                return;
            }
            const newList = [...lists, target];
            localStorage.setItem("groups", JSON.stringify(newList));
            e.target.value = "";
            inputRef.current.focus();
            setLists(newList);
        }
    };

    const handleAddGp = () => {
        const target = inputRef.current.value.trim();
        if (target === "") {
            alert("새 그룹 이름을 입력해주세요");
            inputRef.current.focus();
            return;
        }
        const newList = [...lists, target];
        localStorage.setItem("groups", JSON.stringify(newList));
        inputRef.current.value = "";
        inputRef.current.focus();
        setLists(newList);
    };

    const handleDeleteList = (index) => {
        console.log(index);
        const newList = lists.filter((_, i) => i !== index);
        localStorage.setItem("groups", JSON.stringify(newList));
        setLists(newList);
    };

    return (
        <div className="modalWrap">
            <section className="GroupModal">
                <h2>그룹 관리</h2>
                <ul>
                    {lists.map((list, index) => (
                        <li key={index}>
                            <span>{list}</span>
                            <button
                                onClick={() => {
                                    handleDeleteList(index);
                                }}
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>
                <div>
                    <input
                        type="text"
                        placeholder="새 그룹 이름"
                        ref={inputRef}
                        onKeyUp={handleKeyup}
                    />
                    <button onClick={handleAddGp}>추가</button>
                </div>
                <button onClick={handleCloseBtn}>닫기</button>
            </section>
        </div>
    );
}
