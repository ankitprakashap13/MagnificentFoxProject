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
import NotFound from './components/NotFound';

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

const API_BASE_URL = process.env.BACKEND_SERVER_URL || 'https://api.magnificentfox.shop';

function App() {
  const [cardListData, setCardListData] = useState([]);
  const [columnStructureData, setColumnStructureData] = useState([]);
  const [favouritesData, setFavouritesData] = useState([]);
  const [reviewsData, setReviewsData] = useState([]);
  const [videoCardsData, setVideoCardsData] = useState([]);
  const [products, setProducts] = useState([]);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cardListResponse = await axios.get(`${API_BASE_URL}/cardListData`);
        setCardListData(cardListResponse.data);

        const columnStructureResponse = await axios.get(`${API_BASE_URL}/columnStructureData`);
        setColumnStructureData(columnStructureResponse.data);

        const favouritesResponse = await axios.get(`${API_BASE_URL}/favouritesData`);
        setFavouritesData(favouritesResponse.data);

        const reviewsResponse = await axios.get(`${API_BASE_URL}/reviewsData`);
        setReviewsData(reviewsResponse.data);

        const videoCardsResponse = await axios.get(`${API_BASE_URL}/videoCardsData`);
        setVideoCardsData(videoCardsResponse.data);

        const productsResponse = await axios.get(`${API_BASE_URL}/products`);
        const productsData = productsResponse.data.order_items.map(item => ({
          product: item.product,
          quantity: item.quantity,
          price: item.price
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching data from API:", error);
        setApiError(true);
      }
    };

    fetchData();
  }, []);

  if (apiError) {
    return <NotFound />;
  }

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
                  <Route component={NotFound} />
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
