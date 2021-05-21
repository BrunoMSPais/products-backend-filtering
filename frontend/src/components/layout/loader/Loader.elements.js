import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: #101522;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingSpinner = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--darkBg);
  animation: spin 1s infinite linear;

  .spinner-gradient {
    width: 50%;
    height: 10%;
    top: 0;
    left: 50%;
    background-color: var(--primaryClr);
    background-image: linear-gradient(
      to right,
      var(--primaryClr),
      var(--secondaryClr)
    );
    transform: translateX(-50%);
    transform: rotate(0deg);
    border-radius: 8px;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
