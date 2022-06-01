import * as React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div style={{display:"flex",gap:"2rem"}}>
      <Link to="predesign/94">Design 94</Link>
      <Link to="predesign/37">Design 37</Link>
      <Link to="control-panel">control-panel</Link>
    </div>
  );
};
