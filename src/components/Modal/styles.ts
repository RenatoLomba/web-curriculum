import styled from 'styled-components';

export const ModalOverlay = styled.div`
    background: ${(props) => props.theme.colors.bg};
    /* opacity: 0.5; */
    z-index: 400;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface ModalContainerProps {
  innerWidth: number;
}
export const ModalContainer = styled.div<ModalContainerProps>`
    background-color: ${(props) => props.theme.colors.light};
    width: 60%;
    /* max-width: 400px; */
    padding: 2rem 3rem;
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    text-align: center;
    position: relative;

    img {
      max-width: ${(props) => (props.innerWidth >= 1707 ? '650px' : '500px')};
      max-height: ${(props) => (props.innerWidth >= 1707 ? '650px' : '500px')};
    }
`;
export const ModalCloseButton = styled.button`
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0;
`;

interface ModalImageProps {
  url: string;
  innerWidth: number;
}
export const ModalButtonImage = styled.div<ModalImageProps>`
  width: ${(props) => (props.innerWidth >= 1500 ? '140px' : '120px')};
  height: ${(props) => (props.innerWidth >= 1500 ? '140px' : '120px')};
  /* width: 150px;
  height: 150px; */
  margin: 1rem;
  padding: 0.25rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primary};
  transition: all 300ms;

  &:hover {
    filter: brightness(60%);
  }

  div {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-image: url('${(props) => props.url}');
    background-size: cover;
  }
`;
