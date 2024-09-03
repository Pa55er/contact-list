import InputEl from "../InputEl";
import SelectEl from "../SelectEl";
import GroupModal from "../GroupModal";
import { useState } from "react";

export default function InputCon({ contactLists, setContactLists }) {
    const dataGroups = JSON.parse(localStorage.getItem("groups")) || [];
    const [lists, setLists] = useState(dataGroups);
    const [isClickAddGp, setIsClickAddGp] = useState(false);

    const object = {
        name: "",
        tel: "",
        group: "",
        memo: "",
    };
    const regExp = {
        name: /^[가-힣]{2,}$/,
        tel: /^010-\d{4}-\d{4}$/,
    };

    const [inputData, setInputData] = useState(object);

    const handleAddList = () => {
        if (!regExp.name.test(inputData.name)) {
            alert("한글 2글자 이상 입력해주세요");
            return;
        } else if (!regExp.tel.test(inputData.tel)) {
            alert("010-****-**** 형식에 맞춰 전화번호를 입력해주세요");
            return;
        } else if (inputData.group === "") {
            alert("그룹 선택은 필수입니다");
            return;
        }
        const newContactLists = [inputData, ...contactLists];
        localStorage.setItem("contactList", JSON.stringify(newContactLists));
        setContactLists(newContactLists);
        setInputData({
            name: "",
            tel: "",
            group: "",
            memo: "",
        });
    };

    return (
        <>
            <section className="InputCon">
                <InputEl
                    label="이름"
                    id="name"
                    inputData={inputData}
                    setInputData={setInputData}
                />
                <InputEl
                    label="전화번호"
                    id="tel"
                    inputData={inputData}
                    setInputData={setInputData}
                />
                <SelectEl
                    label="그룹"
                    id="group"
                    lists={lists}
                    setIsClickAddGp={setIsClickAddGp}
                    inputData={inputData}
                    setInputData={setInputData}
                />
                <InputEl
                    label="간단한 기록"
                    id="memo"
                    inputData={inputData}
                    setInputData={setInputData}
                />
                <button onClick={handleAddList}>저장</button>
            </section>
            {isClickAddGp ? (
                <GroupModal
                    lists={lists}
                    setLists={setLists}
                    setInputData={setInputData}
                    setIsClickAddGp={setIsClickAddGp}
                />
            ) : null}
        </>
    );
}
