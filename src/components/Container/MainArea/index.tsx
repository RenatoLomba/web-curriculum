import React, { useContext } from 'react';
import Link from 'next/link';
import {
  FaHome,
} from 'react-icons/fa';
import { Props } from '..';
import { GlobalContext } from '../../../contexts/GlobalContext';
import { Main, ScrollerArea, TabItem } from './styles';

const MainArea = ({ children }: Props) => {
  const { isPTBR, activePage } = useContext(GlobalContext);

  return (
    <Main>
      <header>
        <nav>
          <ul>
            <TabItem isActive={activePage === 'Home'}>
              <Link href="/">
                <a>
                  <FaHome size={25} />
                </a>
              </Link>
            </TabItem>
            <TabItem isActive={activePage === 'Professional'}>
              <Link href="professional">
                <a>
                  {/* <FaBriefcase size={15} />
                  {' '} */}
                  {isPTBR ? 'Profissional' : 'Professional'}
                </a>
              </Link>
            </TabItem>
            <TabItem isActive={activePage === 'Formation'}>
              <Link href="formation">
                <a>
                  {/* <FaUniversity size={15} />
                  {' '} */}
                  {isPTBR ? 'Formação' : 'Academic'}
                </a>
              </Link>
            </TabItem>
            <TabItem isActive={activePage === 'Projects'}>
              <Link href="projects">
                <a>
                  {/* <FaProjectDiagram size={15} />
                  {' '} */}
                  {isPTBR ? 'Projetos' : 'Projects'}
                </a>
              </Link>
            </TabItem>
            {/* <TabItem isActive={activePage === 'Contact'}>
              <Link href="contact">
                <a>
                  <FaPhoneAlt size={20} />
                </a>
              </Link>
            </TabItem> */}
          </ul>
        </nav>
      </header>
      <ScrollerArea>
        {children}
      </ScrollerArea>
    </Main>
  );
};
export { MainArea };
