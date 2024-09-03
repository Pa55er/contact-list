export default function List({
    list,
    setTargetList,
    contactLists,
    setContactLists,
}) {
    const handleDeleteList = () => {
        const newContactLists = contactLists.filter((_, i) => i !== list.index);
        localStorage.setItem("contactList", JSON.stringify(newContactLists));
        setContactLists(newContactLists);
    };

    const handleShowDetail = () => {
        setTargetList(list.index);
    };

    return (
        <li className="List">
            <span>{list.name + " / " + list.tel + " / " + list.group}</span>
            <div>
                <button onClick={handleShowDetail}>세부사항</button>
                <button onClick={handleDeleteList}>삭제</button>
            </div>
        </li>
    );
}
