import React from 'react';
import MovieList from './components/MovieList';
import movies from './data';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      Hora de codar! 🚀✍️👨‍💻👩‍💻💪
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
