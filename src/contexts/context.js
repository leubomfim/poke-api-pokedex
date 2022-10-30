import { createContext, useContext, useEffect, useState } from 'react';
import P from 'prop-types';

import { pokeApi, pokeDetailsApi } from '../services';

export const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
  const [poke, setPoke] = useState([]);
  const [pokeDetails, setPokeDetails] = useState('');
  const [paramId, setParamId] = useState('');
  let [id, setId] = useState(1);
  let [maxId, setMaxId] = useState(20);

  useEffect(() => {
    pokeApi(setPoke, id, maxId);
    pokeDetailsApi(setPokeDetails, paramId);
  }, [id, maxId, paramId]);

  const pokeObject = {
    poke,
    setMaxId,
    setId,
    pokeDetails,
    setParamId,
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
