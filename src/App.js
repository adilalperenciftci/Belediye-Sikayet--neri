import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://www.meram.bel.tr/upload/sdosyalar/MTYxMGQyODQ3ZWM3OTM.svg" alt="Meram Belediyesi Logosu" className="App-logo" />
        <h1>Belediye Öneri ve Şikayet Formu</h1>
      </header>
      <main>
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
