import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css'

const App = () => {
  return (
    <React.Fragment>
      <div className='app-container'>
        <header>
          <Header/>
        </header>
        <section>
          <Main/>
        </section>
        <footer>
          <Footer/>
        </footer>

      </div>
        
    </React.Fragment>
  )
}

export default App