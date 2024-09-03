export default function InputEl({ label, id }) {
    return (
        <div className="InputEl">
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} placeholder={label} />
        </div>
    );
}
