import SearchCon from "../SearchCon";
import List from "../List";
import DetailModal from "../DetailModal";

export default function ListArea() {
    return (
        <>
            <section className="ListArea">
                <SearchCon />
                <ul>
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                </ul>
            </section>
            {/* <DetailModal /> */}
        </>
    );
}
