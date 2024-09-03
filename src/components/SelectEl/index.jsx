export default function SelectEl({ label, id }) {
    return (
        <div className="SelectEl">
            <label htmlFor={id}>{label}</label>
            <div>
                <select id={id}></select>
                <button>조직추가</button>
            </div>
        </div>
    );
}
