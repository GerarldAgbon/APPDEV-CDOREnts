import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Listings from './containers/Listing';
import ListingDetail from './containers/ListingDetail';
import Login from './containers/Login';
import SignUp from './containers/Signup';
import NotFound from './components/NotFound';
import Layout from './hocs/Layout';

import store from './store';
import { Provider } from 'react-redux';

import './sass/main.scss';

const App = () => (
    <BrowserRouter>
      <Provider store={store}>  
        <Layout>
          <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/listings' element={<Listings />} />
                <Route path='/listings/:id' element={<ListingDetail />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route element={<NotFound />} />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>   
      
);

export default App;
