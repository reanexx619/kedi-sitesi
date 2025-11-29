import React from 'react';
    import './App.css';

    function App() {
      return (
        <div className="app-container">
          <h1>😻 Kedi Sevme Sitesi 😻</h1>
          <p>Burada kedileri çok seviyoruz! Onlar dünyanın en tatlı canlıları.</p>
          <img
            src="https://placekitten.com/400/300"
            alt="Sevimli bir kedi"
            className="cat-image"
          />
          <p>Bütün kediler harikadır!</p>
          <button onClick={() => alert('Meow! 🐾')}>Kedi Sev!</button>
        </div>
      );
    }

    export default App;