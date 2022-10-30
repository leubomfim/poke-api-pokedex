import { useNavigate } from 'react-router-dom';
import { usePokeContext } from '../../contexts/context';
import * as S from './styles';

export const PokeCard = () => {
  const { poke, setId, setMaxId } = usePokeContext();
  const navigate = useNavigate();
  let pokeTypes;

  const getPokeTypes = (types) => {
    const pokeType = types.map((typeName) => typeName.type.name);
    pokeTypes = pokeType;
  };

  const goToDetailsPage = (e) => {
    navigate(`/${e.target.id}`);
    setId(1);
    setMaxId(20);
  };

  return (
    <section>
      <S.PokeCardContainer>
        {poke.length === 0 && <S.Loading>Loading...</S.Loading>}
        {poke.length > 0 && (
          <S.PokeCardDisplay>
            {poke.map((el, index) => (
              <div key={index}>
                {getPokeTypes(el.data.types)}
                <S.PokeCard
                  title="More details!"
                  type={pokeTypes[0]}
                  id={el.data.id}
                  onClick={(e) => goToDetailsPage(e)}
                >
                  <S.PhotoArea id={el.data.id}>
                    {el.data.sprites.front_default === null && (
                      <S.NoPhoto id={el.data.id}>No photo!</S.NoPhoto>
                    )}
                    {el.data.sprites.front_default !== null && (
                      <S.PokemonPhoto
                        id={el.data.id}
                        src={el.data.sprites.front_default}
                        alt={`${el.data.name} pokemon photo`}
                      />
                    )}
                  </S.PhotoArea>
                  <S.PokeName title={el.data.name} id={el.data.id}>
                    {el.data.name.length > 12
                      ? el.data.name.substring(0, 10) + '...'
                      : el.data.name}
                  </S.PokeName>
                  <S.TypeName id={el.data.id}>
                    {' '}
                    <S.Span id={el.data.id}>Types: </S.Span>
                    {pokeTypes.length === 1 && pokeTypes[0]}
                    {pokeTypes.length > 1 &&
                      `${pokeTypes[0]} / ${pokeTypes[1]}`}
                  </S.TypeName>
                  <S.PokemonId id={el.data.id}>
                    <S.Span>Id: </S.Span> {el.data.id}
                  </S.PokemonId>
                  <S.WeightAndHeightArea>
                    <S.PokemonWeight id={el.data.id}>
                      <S.Span id={el.data.id}>Weight: </S.Span>{' '}
                      {el.data.weight.toLocaleString()} kg
                    </S.PokemonWeight>
                    <S.PokemonHeight id={el.data.id}>
                      <S.Span id={el.data.id}>Height: </S.Span>{' '}
                      {el.data.height.toLocaleString()} m
                    </S.PokemonHeight>
                  </S.WeightAndHeightArea>
                </S.PokeCard>
              </div>
            ))}
          </S.PokeCardDisplay>
        )}
      </S.PokeCardContainer>
    </section>
  );
};
