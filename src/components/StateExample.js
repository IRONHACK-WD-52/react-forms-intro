import React, { useState } from 'react';

function StateExample() {
  const [state, setState] = useState({
    name: 'Pedro',
    city: 'Indaiatuba',
    state: 'SP',
    country: 'Brazil',
    favoriteFoods: ['Fries', 'Hamburger', 'Lasagna'],
  });
  const [age, setAge] = useState(15);

  // Retorno do useState
  // Index 0: o state em si, iniciado no valor do parametro passado para a funcao useState
  // Index 1: uma funcao para atualizar o state presente no index 0

  return (
    <div style={{ marginLeft: '1rem' }}>
      <div>
        <ul>
          <li>
            <strong>Name: </strong>
            {state.name}
          </li>
          <li>
            <strong>City: </strong>
            {state.city}
          </li>
          <li>
            <strong>State: </strong>
            {state.state}
          </li>

          <li>
            <strong>Country: </strong>
            {state.country}
          </li>

          <li>
            <strong>Favorite Foods: </strong>
            <ul>
              {state.favoriteFoods.map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </li>
        </ul>

        <div>
          <strong>Age: </strong>
          {age}
        </div>

        <div>
          <button
            type="button"
            onMouseOver={() => {
              const newFavoriteFoods = state.favoriteFoods.filter(
                (food) => food !== 'Hamburger'
              );

              setState({ ...state, favoriteFoods: [...newFavoriteFoods] });

              setAge(30);
            }}
          >
            Change name
          </button>
        </div>
      </div>
    </div>
  );
}

export default StateExample;
