import styled from 'styled-components';

export const TopItem = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  position: fixed;
  top: 0;
  padding: 0.5rem 1.5rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 3px solid ${(props) => props.theme.colors.dark};
  border-top: none;

  h2 {
    color: ${(props) => props.theme.colors.fontLight};
    font-size: 0.75rem;
    text-align: center;
    margin-bottom: 0.25rem;
  }

  div {
    margin: 0 auto;
  }
`;
