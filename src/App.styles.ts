import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: 0;
  margin: 0;

  iframe {
    width: 100%;
    height: 100%;

    border: none;
    border-width: 0;
  }

  ul {
    height: 100%;
    min-height: 200px;
  }
`;

export const Title = styled.div`
  margin-top: 30px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
  text-align: center;
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

export const Card = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

`;