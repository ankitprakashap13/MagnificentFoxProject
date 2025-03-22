import './css/App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, StyleReset } from 'atomize';
import { ThemeContextProvider } from './core/ThemeContext';
import OffersBanner from './components/OffersBanner';
import Navigation from './components/Navigation';
import SloganSection from './components/SloganSection';
import ColumnStructure from './components/ColumnStructure';
import Footer from './components/Footer';
import SlideShow from './components/SlideShow';
import Collections from './components/Collections';
import Favourites from './components/Favourites';
import Reviews from './components/Reviews';
import VideoCards from './components/VideoCards';

const theme = {
  offersBanner: {
    background: '#e7d9be',
  },
  navigation: {
    background: '#fff',
    color: '#000',
  },
  footer: {
    background: '#e7d9be',
  },
};

function App() {
  const [cardListData, setCardListData] = useState([]);
  const [columnStructureData, setColumnStructureData] = useState([]);
  const [favouritesData, setFavouritesData] = useState([]);
  const [reviewsData, setReviewsData] = useState([]);
  const [videoCardsData, setVideoCardsData] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/cardListData').then(response => setCardListData(response.data));
    axios.get('/api/columnStructureData').then(response => setColumnStructureData(response.data));
    axios.get('/api/favouritesData').then(response => setFavouritesData(response.data));
    axios.get('/api/reviewsData').then(response => setReviewsData(response.data));
    axios.get('/api/videoCardsData').then(response => setVideoCardsData(response.data));
    axios.get('/api/products').then(response => {
      const productsData = response.data.order_items.map(item => ({
        product: item.product,
        quantity: item.quantity,
        price: item.price
      }));
      setProducts(productsData);
    });
  }, []);

  return (
    <ThemeContextProvider>
      <ThemeProvider theme={theme}>
        <StyleReset />
        <Router>
          <div className="App">
            <div className="container">
              <OffersBanner theme={theme.offersBanner} />
              <Navigation theme={theme.navigation} />
              <header className="App-header">
                <Switch>
                  <Route exact path="/">
                    <SlideShow products={products || []} />
                    <Collections cards={cardListData || []} />
                    <SloganSection slogan="Our Slogan" />
                    <ColumnStructure data={columnStructureData || []} />
                    <Favourites cards={favouritesData || []} />
                    <Reviews reviews={reviewsData || []} />
                    <VideoCards cards={videoCardsData || []} />
                    <Footer theme={theme.footer} />
                  </Route>
                </Switch>
              </header>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </ThemeContextProvider>
  );
}

export default App;
