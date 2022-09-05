import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css'
import { Grid} from '@mui/material';
import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import About from './components/Pages/About';
import Service from './components/Pages/Service';
import Product from './components/Pages/Product';
import Contact from './components/Pages/Contact';
import BrandDetails from './components/Pages/BrandDetails';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Grid  >
          <Grid item sx={{ height:'10vh'} }>
            <Header/>
          </Grid>
          <Grid item sx={{minHeight:"75vh" }}>
            <Routes>
              <Route path='/' element={<Main/>} exact={true} ></Route>
              <Route path='/About' element={<About/>} exact={true} ></Route>
              <Route path='/Service' element={<Service/>} exact={true} ></Route>
              <Route path='/Product' element={<Product/>} exact={true} ></Route>
              <Route path='/Contact' element={<Contact/>} exact={true} ></Route>
              <Route path='/BrandDetails/:id' element={<BrandDetails/>} exact={true} ></Route>
            </Routes>
          </Grid>
          <Grid item sx={{background:"#0d2436", backgroundSize:"cover",marginTop:"10px",} }>
            <Footer/>
          </Grid>
        </Grid>
      </Router>
    </React.Fragment>
  )
}

export default App