import styled, { keyframes, css } from 'styled-components';

export const Title = styled.h1`
  font-size: 32px;
  color: ${props => (props.error ? 'red' : '#FFF')};
  font-family: Arial, Helvetica, sans-serif;

  small {
    font-size: 18px;
    color: yellow;
    padding: 10px;
  }
`;

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
  font-family: 'Courier New', Courier, monospace;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  svg {
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.busy,
}))`
  background: #7159c1;
  border: 0;
  margin-left: 10px;
  padding: 0 10px;
  border-radius: 4px;

  display: flex;
  padding-left: 20px;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.busy &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
