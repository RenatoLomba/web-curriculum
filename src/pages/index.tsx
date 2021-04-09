import { Head } from 'next/document';
import React, { useContext, useEffect } from 'react';
import { Content } from '../components/Content';
import { GlobalContext } from '../contexts/GlobalContext';
import info from '../data/info.json';

export default function Home() {
  const { changeActivePage, isPTBR } = useContext(GlobalContext);

  useEffect(() => changeActivePage('Home'));

  return (
    <Content>
      <title>Home</title>
      <h1>
        {isPTBR ? 'Sobre mim' : 'About Me'}
      </h1>
      <p>
        {'    '}
        {isPTBR ? info.about.pt : info.about.eng}
      </p>
      <h1>
        {isPTBR ? 'Objetivos' : 'Goals'}
      </h1>
      <p>
        {'    '}
        {isPTBR ? info.goals.pt : info.goals.eng}
      </p>
    </Content>
  );
}
