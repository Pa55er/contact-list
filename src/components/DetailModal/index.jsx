export default function DetailModal() {
    return (
        <div className="modalWrap">
            <section className="DetailModal">
                <h2>연락처 상세 정보</h2>
                <div>
                    <span>이름: </span>
                    <p>윤석준</p>
                </div>
                <div>
                    <span>전화번호: </span>
                    <p>010-1234-5678</p>
                </div>
                <div>
                    <span>그룹: </span>
                    <p>가족</p>
                </div>
                <div>
                    <span>메모: </span>
                    <p>살려줘ㅓasdassadasdsㅓㅓ</p>
                </div>
                <button>닫기</button>
            </section>
        </div>
    );
}
