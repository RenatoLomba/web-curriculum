import styled from 'styled-components';

export const Box = styled.section`
  margin: 0 auto;
  min-width: 80%;
  max-width: 90%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Widget = styled.div`
  background-color: ${(props) => props.theme.colors.light};
  flex: 1;
  border-radius: 10px;
  display: flex;

  main {
    flex: 1;
  }
`;
