import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: 0;
  margin: 0;

  iframe {
    width: 100%;
    height: 50vh;

    border: none;
    border-width: 0;
  }

  ul {
    height: 100%;
    min-height: 400px;
  }
`;

export const Title = styled.div`
  margin: 10px 0;
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
`;

export const InputWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
    width: 200px;
    font-size: 16px;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
`;