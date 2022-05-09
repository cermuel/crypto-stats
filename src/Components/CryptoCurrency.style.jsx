import styled from "styled-components";

export const CryptoContainer = styled.div`
  height: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const CryptoList = styled.div`
  width: 225px;
  height: 130px;
  border-radius: 20px;
  box-shadow: 2px 2px 8px white;
  margin: 10px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;
