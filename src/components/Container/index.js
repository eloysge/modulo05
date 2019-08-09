import styled from 'styled-components';

const Container = styled.div.attrs(props => ({
  disabled: props.disabled,
}))`
  max-width: 650px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    button {
      display: flex;
      justify-content: center;
      margin-left: 10px;
      align-items: center;
      border-radius: 4px;
      padding: 4px;

      &[disabled] {
        cursor: not-allowed;
        opacity: 0.4;
      }
      svg {
        width: 20px;
        padding-left: 6px;
      }

      &:hover {
        background: red;
        color: #fff;
      }
    }
  }

  svg {
    margin-right: 10px;
  }
`;

export default Container;
