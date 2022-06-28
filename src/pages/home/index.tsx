import React from 'react';
import { ChooseTemplates } from 'pages/chooseTemplates';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Link to="predesign/94">Design 94</Link>
      <Link to="blank/1">Blank 1</Link>
      <Link to="predesign/37">Design 37</Link>
      <Link to="control-panel">control-panel</Link>
      <Link to="predesign/24">Design 24</Link>
      <Link to="blank/3">Blank3</Link>
      <Link to="blank/2">Blank2</Link>
      <Link to="create">Create</Link>
      <Link to="selector">Selector</Link>
    </div>
      <ChooseTemplates />
    </>
  );
};
