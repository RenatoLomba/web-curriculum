import styled from 'styled-components';

export const Aside = styled.aside`
  background-color: ${(props) => props.theme.colors.bg};
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 35%;
  color: ${(props) => props.theme.colors.fontLight};
  border-bottom-left-radius: 7px;
  border-top-left-radius: 7px;

  img {
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    margin-top: -5.5rem;
  }

  h1 {
    margin-top: 1rem;
    font-weight: 600;
    font-size: 2rem;
    letter-spacing: 0.25rem;
  }

  nav {
    margin-top: 2rem;
  }

  li {
    display: flex;
    flex-direction: column;
    margin: 1.1rem 0;
  }

  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 0.2rem;
  }

  span {
    margin-bottom: 0.25rem;
    text-overflow: clip;
  }
`;
