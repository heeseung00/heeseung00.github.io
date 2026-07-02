import React, { useState } from 'react';

function List({ post, showButton, onSelect, onRemove }) {
    // state를 만들고 그 값을 조정해야한다! 변하는 값은 무족건 state사용
    const [count, setCount] = useState(0);
    // console.log(post);
    // console.log(post?.title);
    const [currentTitle, setCurrentTitle] = useState(post.title);

    function handleLikes() {
        setCount(count + 1);
    }
    function changeTitle() {
        setCurrentTitle('여자코트추천');
    }

    return (
        <div className="list">
            <div>
                <>
                    {/* 타이틀 클릭시 모달에 해당글의 데이터전달 */}
                    <h2 className="list-title" onClick={onSelect}>
                        {currentTitle}
                    </h2>
                    {/* 좋아요 버튼 카운팅 */}
                    <div className="likes">
                        <span onClick={handleLikes}>👍</span>
                        <span>{count}</span>
                    </div>
                    {/* 글 수정 버튼 - 첫번째 글에만 포함*/}
                    {showButton && <button onClick={changeTitle}>글 수정</button>}
                    {/* 글 삭제 버튼 */}
                    <button onClick={onRemove}>글 삭제</button>
                </>
                <div>{post.date}</div>
                <p>{post.content}</p>

                <hr />
            </div>
        </div>
    );
}

export default List;
