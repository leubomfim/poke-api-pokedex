import { createContext, useContext, useEffect, useState } from 'react';
import P from 'prop-types';

import { pokeApi, pokeDetailsApi, pokeSearchApi } from '../services';

export const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');
  const [poke, setPoke] = useState([]);
  const [searchPoke, setSearchPoke] = useState('');
  const [pokeDetails, setPokeDetails] = useState('');
  const [paramId, setParamId] = useState('');

  let [id, setId] = useState(1);
  let [maxId, setMaxId] = useState(20);

  useEffect(() => {
    if (searchValue === '') {
      pokeApi(setPoke, id, maxId, setSearchPoke);
    } else {
      pokeSearchApi(setSearchPoke, searchValue);
    }

    pokeDetailsApi(setPokeDetails, paramId);
  }, [id, maxId, paramId, searchValue]);

  const pokeObject = {
    poke,
    setMaxId,
    setId,
    pokeDetails,
    setParamId,
    setSearchValue,
    searchValue,
    searchPoke,
  };

  return (
    <PokeContext.Provider value={pokeObject}>{children}</PokeContext.Provider>
  );
};

export const usePokeContext = () => {
  const context = useContext(PokeContext);
  if (context === undefined) {
    throw new Error(
      'useCheckoutContext must be used within a CheckoutProvider',
    );
  }
  return context;
};

PokeProvider.propTypes = {
  children: P.node.isRequired,
};
