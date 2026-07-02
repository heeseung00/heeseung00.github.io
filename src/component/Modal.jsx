// import React, { useState } from 'react';

function Modal({ title, date, content }) {
    return (
        <>
            <div className="Modal">
                <h2>{title || '제목'}</h2>
                <p>{date || '날짜'}</p>
                <p>{content || '상세내용'}</p>
            </div>
        </>
    );
}

export default Modal;
