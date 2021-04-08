import styled from 'styled-components';

export const Main = styled.main`
  header {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.fontLight};
    margin: 0 auto;
    padding: 1.5rem;
    border-top-right-radius: 9px;

    nav ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
`;

export const ScrollerArea = styled.div`
  padding: 1.5rem;
`;

interface TabProps {
  isActive: boolean;
}

export const TabItem = styled.li<TabProps>`
  a {
    color: ${(props) => props.theme.colors.fontLight};
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: 2px;
    border-bottom: 5px solid ${(props) => (props.isActive ? props.theme.colors.dark : props.theme.colors.primary)};
    padding: 0.5rem 0.75rem;
    transition: all 300ms;

    &:hover {
      border-color: ${(props) => props.theme.colors.dark};
    }
  }
`;
