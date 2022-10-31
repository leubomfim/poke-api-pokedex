import styled from 'styled-components';

export const Header = styled.header`
  margin: 20px auto 50px;
  width: 100%;
  max-width: 1024px;

  @media screen and (max-width: 1025px) {
    width: 90%;
  }

  @media screen and (max-width: 900px) {
    width: 85%;
  }
`;

export const HeaderImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 600px) {
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }
`;

export const InputControl = styled.div`
  position: relative;
`;

export const Small = styled.small`
  position: absolute;
  bottom: -20px;
  left: 0;
`;

export const Logo = styled.img`
  width: 250px;
`;

export const SearchInput = styled.input`
  outline: none;
  padding: 10px;
  width: 300px;
  border-radius: 3px;
  font-size: 1.2rem;

`;
