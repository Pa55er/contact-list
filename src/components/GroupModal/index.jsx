export default function GroupModal() {
    return (
        <div className="modalWrap">
            <section className="GroupModal">
                <h2>그룹 관리</h2>
                <ul>
                    <li>
                        <span>가족</span>
                        <button>X</button>
                    </li>
                    <li>
                        <span>가족</span>
                        <button>X</button>
                    </li>
                    <li>
                        <span>가족</span>
                        <button>X</button>
                    </li>
                </ul>
                <div>
                    <input type="text" placeholder="새 그룹 이름" />
                    <button>추가</button>
                </div>
                <button>닫기</button>
            </section>
        </div>
    );
}
