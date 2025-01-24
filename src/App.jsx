import React, { useState } from 'react';
import bunny from './assets/bunny.png'

const App = () => {
  const [showHeart, setShowHeart] = useState(false);

  return (
    <div className="container">
      <img className='bunny' src={bunny} alt="bunnny" />
      <h1 className='center-text'>Happy 1 month anniversary kub babe! 💖</h1>
      <button
        className="button"
        onClick={() => setShowHeart(!showHeart)}
      >
        {showHeart ? 'Hide Heart' : 'Show Heart'}
      </button>
      {showHeart && <div className="heart">ครบ 1 เดือนแรกแล้วขอบคุณที่อยู่ด้วยกันมาตลอดนะคับเค้าเป็นผู้ชายที่โชคดีที่สุดจริงๆที่มีบะเบ๊บอยู่ด้วยรักบะเบ๊บมากๆน้าา🐶❤️</div>}
    </div>
  );
};

export default App;
