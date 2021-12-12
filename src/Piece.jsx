import React from 'react'

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
    return (
        <div className="piece-container">
            <img src={pieceImage} alt={pieceAltText(type, color)} className="piece" />
        </div>
    )
}
