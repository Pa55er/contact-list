import SearchCon from "../SearchCon";
import List from "../List";
import DetailModal from "../DetailModal";
import { useState } from "react";

export default function ListArea({ contactLists, setContactLists }) {
    const [targetList, setTargetList] = useState(null);

    return (
        <>
            <section className="ListArea">
                <SearchCon />
                <ul>
                    {contactLists.map((list, index) => (
                        <List
                            key={index}
                            list={list}
                            index={index}
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
