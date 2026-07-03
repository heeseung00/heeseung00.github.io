// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import List from './component/List';
import Modal from './component/Modal';

// [기능]
// 1. 블로그 list를 컴포넌트화 -> useState를 사용해 제목, 글내용을 바인딩
// 2. 좋아요 버튼을 누르면 카운팅 되도록
// 3. 글자 정렬 버튼을 누르면 가나다 순으로 글자 정렬
// 4. 글목록 제목을 누르면 글목록의 데이터를 모달에 전달
// 5. input 글입력 및 글삭제 기능
// 6. 완성된 파일은 Github Pages로 배포

function App() {
    // 글목록 배열 담기
    const [posts, setPosts] = useState([
        { id: '0', title: '글제목2', date: '2026. 06. 25.', content: '글내용1' },
        { id: '1', title: '글제목3', date: '2026. 06. 26.', content: '글내용2' },
        { id: '2', title: '글제목1', date: '2026. 06. 27.', content: '글내용3' },
    ]);
    // input 입력값 받아오기
    const [inputValue, setInputValue] = useState('');

    // 실시간으로 변경되는 input value값
    const onChange = (e) => {
        setInputValue(e.target.value);
    };

    // input값 받아서 글 추가
    const addItem = () => {
        console.log('리스트 추가된다아아아', inputValue);
        // 빈 문자열 및 공백만 입력한 경우 종료
        if (!inputValue.trim()) return;
        // 현재 날짜로 date 출력
        const today = new Date().toLocaleDateString('ko-KR');
        // 기존의 리스트는 유지하되(...) 새로운 inputValue(인풋 입력 내용)을 추가한다.
        // id는 고유의 값이므로 Date.now()로 고유값을 생성하고 toString()로 문자열로 바꾼다.
        let arrayCopy = [...posts, { id: Date.now().toString(), title: inputValue, date: today, content: '' }];
        setPosts(arrayCopy);
        // 글추가 후 입력창 비우기
        setInputValue('');
    };

    // enter로 추가
    const onSubmitEnter = (e) => {
        if (e.key === 'Enter') {
            addItem();
            // 엔터 키 입력 후 발생하는 이벤트 작성
            console.log('enter 입력');
        }
    };

    // 글삭제 버튼
    const onRemove = (index) => {
        setPosts(posts.filter((item, i) => i !== index));
        setShowModal(false);
    };

    // 글자 정렬 함수
    function sortPosts() {
        let newSort = [...posts].sort((a, b) => a.title.localeCompare(b.title));
        setPosts(newSort);
    }

    // UI의 현재 상태를 state로 저장
    // 현재 어떤 글이 선택되었는지 기억하는 state
    const [selectedPost, setSelectedPost] = useState(null);
    // true: 모달 보이기, false: 모달 숨기기
    const [showModal, setShowModal] = useState(false);

    return (
        // map을 활용한 배열 렌더링
        // title 배열을 map()으로 순회하면서 각 항목을 List 컴포넌트로 렌더링하고, key로 식별자를 부여한다
        // 데이터가 하나면 item, 데이터가 여러 개면 item.속성명
        <div className="App">
            {/* 글자 정렬 */}
            <button className="sort" onClick={sortPosts}>
                글자 정렬
            </button>

            <button
                className="showModal"
                onClick={() => {
                    // 느낌표 우측 자료를 반대로 바꿔준다
                    // 토글 버튼으로 껐다 켰다하기
                    setShowModal(!showModal);
                }}>
                모달 토글
            </button>

            {/* 입력창 */}
            <>
                <input onChange={onChange} onKeyDown={onSubmitEnter} value={inputValue} />
                {/* input 입력 후 버튼 누르면 글 추가 */}
                <button onClick={addItem}>발행</button>
            </>

            {/* 블로그 글목록 */}
            {posts.map((item, index) => (
                <List
                    key={item.id}
                    post={item}
                    showButton={index === 0}
                    onSelect={() => {
                        setSelectedPost(item); // 클릭한 글을 기억
                        setShowModal(true); // 모달 보여줘
                    }}
                    onRemove={() => onRemove(index)}></List>
            ))}

            {/* 모달 상세페이지 */}
            {/* state에 따라 UI가 어떻게 보일지 작성 */}
            {showModal === true ? (
                <Modal title={selectedPost?.title} date={selectedPost?.date} content={selectedPost?.content} />
            ) : null}
        </div>
    );
}
export default App;
