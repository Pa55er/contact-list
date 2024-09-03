export default function SearchCon({ setSearchWord }) {
    const handleSetWord = (e) => {
        const target = e.target.value.trim();
        if (target === "") return;
        setSearchWord(target);
    };

    const handleResetWord = () => {
        setSearchWord("");
    };

    return (
        <div className="SearchCon">
            <input
                type="text"
                placeholder="검색어를 입력 후 엔터를 누르세요"
                onChange={handleSetWord}
            />
            <button onClick={handleResetWord}>전체리스트 보기</button>
        </div>
    );
}
