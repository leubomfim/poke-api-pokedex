import * as S from './styles';
import logo from '../../images/poke-logo.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <S.Header>
      <S.HeaderImage>
        <Link to="/">
          <S.Logo src={logo} alt="Pokémon logo" />
        </Link>
      </S.HeaderImage>
    </S.Header>
  );
};
