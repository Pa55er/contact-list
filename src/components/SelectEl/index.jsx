export default function SelectEl({
    label,
    id,
    lists,
    setIsClickAddGp,
    setInputData,
}) {
    const handleAddGp = () => {
        setIsClickAddGp((prev) => !prev);
    };

    const handleSelected = (e) => {
        setInputData((prev) => ({
            ...prev,
            [id]: e.target.value,
        }));
    };

    return (
        <div className="SelectEl">
            <label htmlFor={id}>{label}</label>
            <div>
                <select id={id} onChange={handleSelected}>
                    <option value="">--선택--</option>
                    {lists.map((list, index) => (
                        <option key={index} value={list}>
                            {list}
                        </option>
                    ))}
                </select>
                <button onClick={handleAddGp}>조직추가</button>
            </div>
        </div>
    );
}
