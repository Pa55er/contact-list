export default function DetailModal({ data, setTargetList }) {
    const handleCloseModal = () => {
        setTargetList(null);
    };

    return (
        <div className="modalWrap">
            <section className="DetailModal">
                <h2>연락처 상세 정보</h2>
                <div>
                    <span>이름: </span>
                    <p>{data.name}</p>
                </div>
                <div>
                    <span>전화번호: </span>
                    <p>{data.tel}</p>
                </div>
                <div>
                    <span>그룹: </span>
                    <p>{data.group}</p>
                </div>
                <div>
                    <span>메모: </span>
                    <p>{data.memo}</p>
                </div>
                <button onClick={handleCloseModal}>닫기</button>
            </section>
        </div>
    );
}
