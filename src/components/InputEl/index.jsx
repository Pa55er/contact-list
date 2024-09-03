export default function InputEl({ label, id, inputData, setInputData }) {
    const handleKeyUp = (e) => {
        setInputData((prev) => ({
            ...prev,
            [id]: e.target.value,
        }));
    };

    return (
        <div className="InputEl">
            <label htmlFor={id}>{label}</label>
            <input
                type="text"
                id={id}
                placeholder={label}
                value={inputData[`${id}`]}
                onChange={handleKeyUp}
            />
        </div>
    );
}
