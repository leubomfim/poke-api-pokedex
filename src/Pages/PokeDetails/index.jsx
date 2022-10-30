import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { usePokeContext } from '../../contexts/context';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export const PoKeDetails = () => {
  const { setParamId, pokeDetails } = usePokeContext();
  const paramId = useParams();
  const navigate = useNavigate();
  let pokeTypes;
  let pokeMoves = [];

  if (pokeDetails) {
    const getPokeTypes = () => {
      const pokeType = pokeDetails.data.types.map(
        (typeName) => typeName.type.name,
      );
      const pokeMove = pokeDetails.data.moves.map(
        (pokeMove) => pokeMove.move.name,
      );
      pokeMoves = pokeMove;
      pokeTypes = pokeType;
    };

    getPokeTypes();
  }

  console.log(pokeDetails.data);

  useEffect(() => {
    setParamId(paramId.id);
  }, [paramId.id, setParamId]);
  return (
    <>
      <Header />
      <S.DetailsSection>
        <S.Container>
          <S.Back onClick={() => navigate('/')}>Back</S.Back>
          {pokeDetails === '' && <S.Loading>Loading...</S.Loading>}
          {pokeDetails && (
            <S.DetailsWrapper>
              {pokeDetails.data.sprites.front_default === null && (
                <div>
                  <S.NoPhoto>No photo!</S.NoPhoto>
                </div>
              )}
              {pokeDetails.data.sprites.front_default !== null && (
                <S.PokeImg src={pokeDetails.data.sprites.front_default} />
              )}
              <div>
                <S.PokeName>{pokeDetails.data.name}</S.PokeName>
                <S.PokemonDetails>
                  <S.PokeInformation>
                    <S.Span>Id: </S.Span> {pokeDetails.data.id}
                  </S.PokeInformation>
                  <S.TypesName>
                    <S.Span>
                      {pokeTypes.length === 1 && 'Type: '}
                      {pokeTypes.length > 1 && `Types: `}
                    </S.Span>{' '}
                    {pokeTypes.length === 1 && pokeTypes[0]}
                    {pokeTypes.length > 1 &&
                      `${pokeTypes[0]} / ${pokeTypes[1]}`}
                  </S.TypesName>
                  <S.PokeInformation>
                    <S.Span>Weight: </S.Span> {pokeDetails.data.weight} Kg
                  </S.PokeInformation>
                  <S.PokeInformation>
                    <S.Span>Height: </S.Span> {pokeDetails.data.height} m
                  </S.PokeInformation>
                  <S.PokeInformation>
                    <S.Span>Base Experience: </S.Span>{' '}
                    {pokeDetails.data.base_experience === null &&
                      'No base experience!'}
                    {pokeDetails.data.base_experience &&
                      `${pokeDetails.data.base_experience} Xp`}
                  </S.PokeInformation>
                  <S.MoveSpan>
                    Moves:
                    {pokeMoves.length === 0 && <S.MoveName>No move</S.MoveName>}
                    {pokeMoves.length > 0 &&
                      pokeMoves.map((move) => (
                        <S.MoveName key={move}>{move}</S.MoveName>
                      ))}
                  </S.MoveSpan>
                </S.PokemonDetails>
              </div>
            </S.DetailsWrapper>
          )}
        </S.Container>
      </S.DetailsSection>
    </>
  );
};
