import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage'; // import the new component
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

describe('App component', () => {
  beforeEach(() =>{
    render(<App/>);
  });

  it('renders Header component', () =>{
    expect(screen.getByRole('heading', {name: /My Favorite Cities/i })).toBeInTheDocument();
  });

  it('renders MainContent component', () => {
    expect(screen.getByText(/I love to visit New York, Paris, and Tokyo\./i)).toBeInTheDocument();
  });

  it('renders Footer component', () => {
    expect(screen.getByText(/@ 2023 City Lovers/i)).toBeInTheDocument();
  });
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
        />

        <Header/>,
        <MainContent/>,
        <Footer/>,
        <WelcomeMessage/> {/* ← add this */}
        {/* other components or code... */}
      </div>
      
         
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
