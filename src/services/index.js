import axios from 'axios';

export const pokeApi = (setPoke, id, maxId, setSearchPoke) => {
  let endpoints = [];
  for (id; id <= maxId; id++) {
    endpoints.push(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }
  axios
    .all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((res) => {
      setSearchPoke('');
      setPoke(res);
    })
    .catch((err) => console.log(err));
};

export const pokeSearchApi = (setSearchPoke, value) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${value}/`)
    .then((resp) => {
      setSearchPoke(resp);
    })
    .catch((err) => {
      if (err.message) {
        return;
      }
    });
};

export const pokeDetailsApi = (setPokeDetails, id) => {
  if (id === '') {
    return;
  } else {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((resp) => setPokeDetails(resp))
      .catch((err) => console.log(err));
  }
};
