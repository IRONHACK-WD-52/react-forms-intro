import React, { useState } from 'react';

const campi = [
  `Sao Paulo`,
  'Madrid',
  'Mexico City',
  'Miami',
  'Lisbon',
  'Amsterdam',
  'Barcelona',
  'Berlin',
];

function Form() {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    description: '',
    newsletter: true,
    bootcamp: 'Web Dev',
    campus: 'Sao Paulo',
  });

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(state);
  }

  return (
    <div style={{ marginLeft: '1rem' }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">
            Nome
            <input
              type="text"
              name="name"
              id="userName"
              placeholder="Digite seu nome"
              value={state.name}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="userEmail">
            E-mail
            <input
              type="text"
              name="email"
              id="userEmail"
              placeholder="Digite seu email"
              autoComplete="none"
              value={state.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="userPassword">
            Senha
            <input
              type="password"
              name="password"
              id="userPassword"
              placeholder="Digite sua senha"
              autoComplete="none"
              value={state.password}
              onChange={handleChange}
            />
          </label>
        </div>

        <div style={{ padding: '1rem' }}>
          <label htmlFor="userDescription">
            Descricao
            <textarea
              name="description"
              id="userDescription"
              placeholder="Fale algo sobre voce"
              autoComplete="none"
              value={state.description}
              onChange={handleChange}
            />
          </label>
        </div>

        <div style={{ padding: '1rem' }}>
          <label htmlFor="newsletter">
            Aceita receber newsletter?
            <input
              type="checkbox"
              name="newsletter"
              id="newsletter"
              autoComplete="none"
              checked={state.newsletter}
              value={state.newsletter}
              onChange={(event) =>
                setState((previousState) => {
                  return { ...state, newsletter: !previousState.newsletter };
                })
              }
            />
          </label>
        </div>

        <div style={{ padding: '1rem' }}>
          <label>Selecione seu Bootcamp</label>
          <div>
            <label htmlFor="userBootcampUX">
              UX/UI
              <input
                type="radio"
                name="bootcamp"
                id="userBootcampUX"
                autoComplete="none"
                value="UX/UI"
                checked={state.bootcamp === 'UX/UI'}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="userBootcampWD">
              Web Dev
              <input
                type="radio"
                name="bootcamp"
                id="userBootcampWD"
                autoComplete="none"
                value="Web Dev"
                checked={state.bootcamp === 'Web Dev'}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="userBootcampDA">
              Data Analytics
              <input
                type="radio"
                name="bootcamp"
                id="userBootcampDA"
                autoComplete="none"
                value="Data Analytics"
                checked={state.bootcamp === 'Data Analytics'}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div style={{ padding: '1rem' }}>
          <label htmlFor="userCampus">
            Selecione seu campus
            <select
              id="userCampus"
              name="campus"
              value={state.campus}
              onChange={handleChange}
            >
              {campi.map((campus, i) => (
                <option key={i} value={campus}>
                  {campus}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
