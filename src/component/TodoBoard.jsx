import React from 'react';
//TodoBoard에 TodoItem컴포넌트 연결
//app에만 연결하는게 아니라 새로 생성한 컴포넌트끼리 연결 가능
import TodoItem from './TodoItem';

// 전달하고 싶은 값은 props를 사용한다.
function TodoBoard(props) {
    // // todoBoard에 props에 todoList가 받아지는지 확인
    // // todoBoard에서 프린트한(props)todoList
    // console.log("todoBoard", props.todoList)

    return (
        <div>
            <h1>투두리스트</h1>
            {/* arr에 있는 item을 하나하나 가져와서 반환한다 */}
            {props.todoList.map((item, index) => (
                <TodoItem key={index} item={item} index={index} onRemove={props.onRemove} />
            ))}
        </div>
    );
}

export default TodoBoard;
