import { useState } from 'react';
import { Header } from '../../components/Header';
import { PokeCard } from '../../components/PokeCard';
import { usePokeContext } from '../../contexts/context';
import * as S from './styles';

export const Home = () => {
  const [pages, setPages] = useState(1);
  const { setId, setMaxId } = usePokeContext();

  const handlePrev = () => {
    if (pages === 1) {
      setPages(55);
      setId(10221);
      setMaxId(10240);
      return;
    }

    if (pages === 45) {
      setId(881);
      setMaxId(900);
    }

    setId((i) => i - 20);
    setMaxId((i) => i - 20);
    setPages((p) => p - 1);
  };

  const handleNext = () => {
    if (pages === 55) {
      setPages(1);
      setId(1);
      setMaxId(20);
      return;
    }
    if (pages === 44) {
      setId(10001);
      setMaxId(10020);
    }

    setId((i) => i + 20);
    setMaxId((i) => i + 20);
    setPages((p) => p + 1);
  };
  return (
    <>
      <Header />
      <S.Container>
        <PokeCard />
        <S.PrevAndNextButtonsArea>
          <S.Button onClick={() => handlePrev()}>prev</S.Button>
          <p>{pages}</p>
          <S.Button onClick={() => handleNext()}>next</S.Button>
        </S.PrevAndNextButtonsArea>
      </S.Container>
    </>
  );
};
