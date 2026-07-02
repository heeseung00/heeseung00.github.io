import React from 'react';

function TodoItem(props) {
    //     const addItem = ()=>{
    //     console.log("리스트 추가된다아아아", inputValue)
    //     // 기존의 리스트는 유지하되(...) 새로운 inputValue(인풋 입력 내용)을 추가한다.
    //     setTodoList([...todoList, inputValue])
    //   }
    const onRemove = () => {
        props.onRemove(props.index); // 부모가 준 함수를 자기 index와 함께 실행
    };
    return (
        <div>
            <div className="todo-item"></div>
            <div className="todo-name">
                {props.item}
                <button onClick={onRemove}>삭제</button>
            </div>
        </div>
    );
}

export default TodoItem;
