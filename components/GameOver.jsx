import React, { useRef } from 'react';
import style from "../styles/game.module.css"

const GameOver = ({ active, loose }) => {

    const wonDiv = useRef(null)


    return (
        (active) ?
            <div ref={wonDiv} className={style.won}>
                <p>You won</p>
                <img src="/assets/together.png" alt="Main and princesse together" />
            </div>
            : 

        (loose) ?
            <div ref={wonDiv} className={style.won}>
                <p>You Loose</p>
            </div>
            : false
    );
};

export default GameOver;