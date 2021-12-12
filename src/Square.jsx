import React from 'react'

export default function Square({ children, isBlack }) {
    const bgClass = isBlack ? 'square-black' : 'square-white';
    return (
        <div className={`${bgClass} board-square`} >
            {children}
        </div >
    )
}
