import styled from 'styled-components';

interface MainProps {
  innerWidth: number;
}

export const MainContent = styled.section<MainProps>`
  max-height: ${(props) => (props.innerWidth >= 1707 ? '450px' : '375px')};
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
    font-size: 2rem;
    color: ${(props) => props.theme.colors.primary};
    padding-bottom: 0.5rem;
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    margin-bottom: 0.5rem;
  }

  h2 {
    color: ${(props) => props.theme.colors.dark};
    font-size: 1.5rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.3rem;
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

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
