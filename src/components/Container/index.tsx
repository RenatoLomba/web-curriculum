import React, { ReactNode } from 'react';
import { MainArea } from './MainArea';
// import { FaPhoneAlt } from 'react-icons/fa';
import { SideBar } from './SideBar';
import { Box, Widget } from './styles';
import { TopToggler } from './TopToggler';

export interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => (
  <Box>
    <Widget>
      <SideBar />
      <MainArea>
        {children}
      </MainArea>
    </Widget>
    <TopToggler />
  </Box>
);
export { Container };
