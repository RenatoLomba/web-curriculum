import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { Props } from '../Container';
import { MainContent } from './styles';

const Content = ({ children }: Props) => {
  const { innerWidth } = useContext(GlobalContext);

  return (
    <MainContent innerWidth={innerWidth}>{children}</MainContent>
  );
};
export { Content };
