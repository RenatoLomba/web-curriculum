import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export default function Contact() {
  const { changeActivePage } = useContext(GlobalContext);

  useEffect(() => changeActivePage('Contact'));

  return (
    <h1>Contact</h1>
  );
}
