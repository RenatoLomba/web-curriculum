import styled from 'styled-components';

interface MainProps {
  innerWidth: number;
}

export const MainContent = styled.section<MainProps>`
  max-height: ${(props) => (props.innerWidth >= 1707 ? '450px' : '420px')};
  min-height: ${(props) => (props.innerWidth >= 1707 ? '425px' : '350px')};
  overflow-y: ${(props) => (props.innerWidth >= 1707 ? 'auto' : 'scroll')};
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 0.3rem;
    background-color: ${(props) => props.theme.colors.light};
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.light};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 25px;
  }

  h1 {
    font-size: 2.1rem;
    color: ${(props) => props.theme.colors.primary};
    padding-bottom: 0.5rem;
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    margin-bottom: 0.5rem;
  }

  h2 {
    color: ${(props) => props.theme.colors.dark};
    font-size: 1.7rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.dark};
    margin-bottom: 0.25rem;
  }

  p {
    text-align: justify;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
`;

export const DivGrouping = styled.div`
  margin-bottom: 0.5rem;
`;
interface RowProps {
  justify?: string;
  wrap?: string;
}
export const Row = styled.div<RowProps>`
  display: flex;
  justify-content: ${(props) => (props.justify ? props.justify : 'space-between')};
  align-items: center;
  flex-wrap: ${(props) => (props.wrap ? props.wrap : 'nowrap')};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
