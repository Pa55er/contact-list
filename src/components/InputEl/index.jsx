export default function InputEl({ label, id, setInputData }) {
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
                onKeyUp={handleKeyUp}
            />
        </div>
    );
}
