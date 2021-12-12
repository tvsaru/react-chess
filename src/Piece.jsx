import React from 'react'

export default function Piece({ piece }) {
    return (
        <div>
            {piece.type} , {piece.color}
        </div>
    )
}
