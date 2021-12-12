import React from 'react'
import BoardSquare from './BoardSquare'

export default function Board({ board }) {
    /**
     * "board" is a multi dimensional array that looks like this
     *          [ 0,  1,  2,  3,  4,  5,  6,  7]
     *    [0] : [a8, b8, c8, d8, e8, f8, g8, h8]
     *    [1] : [a7, b7, c7, d7, e7, f7, g7, h7]
     *    [2] : [a6, b6, c6, d6, e6, f6, g6, h6]
     *    [3] : [a5, b5, c5, d5, e5, f5, g5, h5]
     *    [4] : [a4, b4, c4, d4, e4, f4, g4, h4]
     *    [5] : [a3, b3, c3, d3, e3, f3, g3, h3]
     *    [6] : [a2, b2, c2, d2, e2, f2, g2, h2]
     *    [7] : [a1, b1, c1, d1, e1, f1, g1, h1]
     *
     *  When we board.flat() you end up with single dimension array
     *  like this:
     *      i :   0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15
     *  array : [a8, b8, c8, d8, e8, f8, g8, h8, a7, b7, c7, d7, e7, f7, g7, h7]
     *
     *     i of 8 => a7
     *     x : i % 8 => 0
     *     y : i / 8 => 1
     */

    function getXYPosition(i) {
        const x = i % 8;
        const y = Math.floor(i / 8);

        return { x, y };
    }

    function isBlack(i) {
        const { x, y } = getXYPosition(i);
        return (x + y) % 2 === 1
    }

    function getSquareName(i) {
        const chara = 97;
        const char8 = 56;
        const { x, y } = getXYPosition(i);
        return String.fromCharCode(chara + x) + String.fromCharCode(char8 - y);
    }

    return (
        <div className='board'>
            {board.flat().map((piece, i) => (
                <div key={i} className='square'>
                    {console.log(i, getXYPosition(i), getSquareName(i), isBlack(i))}
                    <BoardSquare piece={piece} isBlack={isBlack(i)} />
                </div>
            ))}
        </div>
    )
}
