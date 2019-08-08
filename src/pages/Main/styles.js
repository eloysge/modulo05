import styled, { keyframes, css } from 'styled-components';

export const Title = styled.h1`
  padding: 10px;
  text-align: center;
  font-size: 30px;
  color: ${props => (props.error ? 'red' : '#FFF')};
  font-family: Arial, Helvetica, sans-serif;

  small {
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
    color: yellow;
    padding: 10px;
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

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px, 0;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      padding-top: 10px;
      border-top: 1px solid yellow;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
