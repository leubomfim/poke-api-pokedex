import * as S from './styles';
import logo from '../../images/poke-logo.png';
import { Link } from 'react-router-dom';
import { usePokeContext } from '../../contexts/context';

export const Header = () => {
  const { setSearchValue, searchValue } = usePokeContext();
  const handleChange = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };
  return (
    <S.Header>
      <S.HeaderImage>
        <Link to="/">
          <S.Logo src={logo} alt="Pokémon logo" />
        </Link>
        <S.InputControl>
          <S.SearchInput
            type="text"
            name="search_input"
            placeholder="Search pokemon..."
            onChange={(e) => handleChange(e)}
            value={searchValue}
          />
          <S.Small>(add the correct pokemon name)</S.Small>
        </S.InputControl>
      </S.HeaderImage>
    </S.Header>
  );
};
