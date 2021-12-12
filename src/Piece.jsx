import React from 'react'
import { useDrag, DragPreviewImage } from 'react-dnd';

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
    /**
     * react-dnd automatically screenshots the component being used
     * as the preview. But that includes the backgroud of the square.
     * If you move the dragSource to the <img>, due to screenshotting
     * you will see that preview will include the image with transparency
     * replaced with square background color.
     *
     * So we use DragPreviewImage to use same piece image to provide
     * transparency.
     */
    const [, dragSource, dragPreview] = useDrag({
        type: 'piece',
        id: `${type}_${color}`
    })
    return (
        <>
            <DragPreviewImage connect={dragPreview}></DragPreviewImage>
            <div className="piece-container" ref={dragPreview} src={pieceImage}>
                <img src={pieceImage} alt={pieceAltText(type, color)} className="piece" />
            </div>
        </>
    )
}
