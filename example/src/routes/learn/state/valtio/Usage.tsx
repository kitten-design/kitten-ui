import { Center } from '@kitten-ui/core';
import React, { Suspense } from 'react';
import { proxy, useSnapshot } from 'valtio';
import { derive } from 'valtio/utils';

const fetchPokemon = (name: string) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => res.json());

const NAMES = [
  'bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon',
  'charizard',
  'squirtle',
  'wartortle',
  'blastoise',
];

const pokemonSelectionStore = proxy({ name: NAMES[0] });

const pokemonDataStore = derive({
  data: (get) => fetchPokemon(get(pokemonSelectionStore).name),
});

const handeNameChange = (e: any) => {
  pokemonSelectionStore.name = e.target.value;
};

const Pokemon = () => {
  const snap = useSnapshot(pokemonDataStore);
  return (
    <div>
      <div>ID: {snap.data.id}</div>
      <div>Height: {snap.data.height}</div>
      <div>Weight: {snap.data.weight}</div>
    </div>
  );
};

const App = () => {
  const snap = useSnapshot(pokemonSelectionStore);
  return (
    <div>
      <select value={snap.name} onChange={handeNameChange}>
        {NAMES.map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
      <hr />
      <Suspense fallback="Loading...">
        <Pokemon />
      </Suspense>
    </div>
  );
};

export function Usage() {
  return (
    <Center>
      <App />
    </Center>
  );
}
