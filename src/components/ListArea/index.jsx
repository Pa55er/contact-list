import SearchCon from "../SearchCon";
import List from "../List";
import DetailModal from "../DetailModal";
import { useState } from "react";

export default function ListArea({ contactLists, setContactLists }) {
    const [targetList, setTargetList] = useState(null);
    const [searchWord, setSearchWord] = useState("");
    const checkSearch = (list) => {
        if (searchWord === "") return true;
        if (list.name.includes(searchWord)) return true;
        if (list.tel.includes(searchWord)) return true;
        if (list.group.includes(searchWord)) return true;
        return false;
    };

    const indexedLists = contactLists.map((list, index) => ({
        ...list,
        index,
    }));

    return (
        <>
            <section className="ListArea">
                <SearchCon setSearchWord={setSearchWord} />
                <ul>
                    {indexedLists
                        .filter((list) => checkSearch(list))
                        .map((list, index) => (
                            <List
                                key={index}
                                list={list}
                                setTargetList={setTargetList}
                                contactLists={contactLists}
                                setContactLists={setContactLists}
                            />
                        ))}
                </ul>
            </section>
            {targetList !== null && (
                <DetailModal
                    data={contactLists[targetList]}
                    setTargetList={setTargetList}
                />
            )}
        </>
    );
}
