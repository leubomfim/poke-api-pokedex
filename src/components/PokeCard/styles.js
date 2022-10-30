import styled, { css } from 'styled-components';

export const PokeCardContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  @media screen and (max-width: 1025px) {
    width: 90%;
  }
`;

export const PokeCardDisplay = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 900px) {
    display: flex;
    grid-template-columns: none;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Loading = styled.h3`
  font-size: 42px;
  text-align: center;
`;

export const PokeCard = styled.div`
  ${({ type }) => css`
    border-radius: 5px;
    padding: 20px;
    cursor: pointer;
    transition: all 500ms ease;
    height: 380px;


    ${type === 'fire' && 'border: 1px solid #F08030;'}
    ${type === 'water' && 'border: 1px solid #6890F0;'}
    ${type === 'grass' && 'border: 1px solid #78C850;'}
    ${type === 'bug' && 'border: 1px solid #A8B820;'}
    ${type === 'fairy' && 'border: 1px solid #F0B6BC;'}
    ${type === 'normal' && 'border: 1px solid #A8A878;'}
    ${type === 'ground' && 'border: 1px solid #E0C068;'}
    ${type === 'poison' && 'border: 1px solid #A040A0;'}
    ${type === 'electric' && 'border: 1px solid #F8D030;'}
    ${type === 'fighting' && 'border: 1px solid #C03028;'}
    ${type === 'psychic' && 'border: 1px solid #F85294;'}
    ${type === 'rock' && 'border: 1px solid #B8A038;'}
    ${type === 'ice' && 'border: 1px solid #98D8D8;'}
    ${type === 'ghost' && 'border: 1px solid #705898;'}
    ${type === 'dragon' && 'border: 1px solid #7038F8;'}
    ${type === 'steel' && 'border: 1px solid #B8B8D0;'}
    ${type === 'flying' && 'border: 1px solid #A890F0;'}
    ${type === 'dark' && 'border: 1px solid #705848;'}

    &:hover {
      transform: scale(1.1);
      ${type === 'fire' && 'background-color: #f7a56b57'}
      ${type === 'water' && 'background-color: #6891f057'}
      ${type === 'grass' && 'background-color: #78c85057'}
      ${type === 'bug' && 'background-color: #a9b82057'}
      ${type === 'fairy' && 'background-color: #f0b6bc57'}
      ${type === 'normal' && 'background-color: #a8a87857'}
      ${type === 'ground' && 'background-color: #e0c06857'}
      ${type === 'poison' && 'background-color: #a040a057'}
      ${type === 'electric' && 'background-color: #f8d03057'}
      ${type === 'fighting' && 'background-color: #c0302857'}
      ${type === 'psychic' && 'background-color: #f8529557'}
      ${type === 'rock' && 'background-color: #b8a13857'}
      ${type === 'ice' && 'background-color: #98d8d857;'}
      ${type === 'ghost' && 'background-color: #71589857'}
      ${type === 'dragon' && 'background-color: #7238f857'}
      ${type === 'steel' && 'background-color: #b8b8d057'}
      ${type === 'flying' && 'background-color: #a890f057'}
      ${type === 'dark' && 'background-color: #70584857'}
    }

    @media screen and (max-width: 900px) {
      width: 201px;
  }

    @media screen and (max-width: 600px) {
      width: 300px;
  }
  `};
`;

export const PokeName = styled.h2`
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 30px;
`;

export const PhotoArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const NoPhoto = styled.h2`
  margin: 45px 0 70px;
`;

export const Span = styled.span`
  font-weight: 700;
`;

export const TypeName = styled.p`
  text-transform: capitalize;
  font-size: 17px;
`;

export const PokemonId = styled.p`
  font-size: 17px;
  margin-top: 15px;
`;

export const WeightAndHeightArea = styled.div`
  margin-top: 15px;
`;

export const PokemonWeight = styled.p`
  font-size: 17px;
  margin-bottom: 15px;
`;

export const PokemonHeight = styled.p`
  font-size: 17px;
`;

export const PokemonPhoto = styled.img`
  width: 150px;
  height: 150px;
`;
