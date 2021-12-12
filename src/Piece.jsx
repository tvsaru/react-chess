import React from 'react'
import { useDrag } from 'react-dnd';

export default function Piece({ piece: { type, color } }) {
    function pieceAltText(type, color) {
        const pieceTypeText = {
            b: "Bishop",
            k: "King",
            n: "Knight",
            p: "Pawn",
            q: "Queen",
            r: "Rook"
        }
        const pieceColorText = {
            b: "Black",
            w: "White"
        }
        return pieceColorText[color] + " " + pieceTypeText[type];
    }

    const pieceImage = require(`./assets/${type}_${color}.png`);

    // https://react-dnd.github.io/react-dnd/docs/api/use-drag
    const [, dragSource,] = useDrag({
        type: 'piece',
        id: `${type}_${color}`
    })
    return (
        <div className="piece-container" ref={dragSource}>
            <img src={pieceImage} alt={pieceAltText(type, color)} className="piece" />
        </div>
    )
}
