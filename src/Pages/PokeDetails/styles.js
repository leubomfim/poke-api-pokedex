import styled from 'styled-components';

export const DetailsSection = styled.section`
  margin-top: 100px;
  margin-bottom: 50px;

`;

export const Back = styled.button`
  position: absolute;
  background-color: transparent;
  color: white;
  font-size: 18px;
  cursor: pointer;
  top: -50px;
  border-radius: 5px;
  border: 1px solid white;
  padding: 8px 40px;
  transition: background-color 400ms ease;

  &:hover {
    background-color: #ffffff3f;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  position: relative;
  @media screen and (max-width: 1025px) {
    width: 90%;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  flex-direction: column;

`;

export const PokeImg = styled.img`
  width: 400px;

  @media screen and (max-width: 600px) {
    width: 300px;
  }
`;

export const Loading = styled.h3`
  font-size: 42px;
  text-align: center;
`;

export const NoPhoto = styled.h3`
  font-size: 42px;
`;

export const PokeName = styled.h2`
  font-size: 38px;
  margin-bottom: 40px;
`;

export const MoveSpan = styled.span`
  font-weight: 700;
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export const TypesName = styled.p`
  text-transform: capitalize;
  font-weight: normal;
  margin-top: 15px;
`;

export const PokeInformation = styled.p`
  font-weight: normal;
  margin-top: 15px;
`;

export const Span = styled.span`
  font-weight: 700;
`;

export const MoveName = styled.p`
  font-weight: normal;
  text-transform: capitalize;
  padding: 5px;
  border: 1px solid white;
  border-radius: 5px;
`;

export const PokemonDetails = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;
