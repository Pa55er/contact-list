import InputEl from "../InputEl";
import SelectEl from "../SelectEl";
import GroupModal from "../GroupModal";

export default function InputCon() {
    return (
        <>
            <section className="InputCon">
                <InputEl label="이름" id="name" />
                <InputEl label="전화번호" id="tel" />
                <SelectEl label="그룹" id="group" />
                <InputEl label="간단한 기록" id="shortText" />
                <button>저장</button>
            </section>
            {/* <GroupModal /> */}
        </>
    );
}
