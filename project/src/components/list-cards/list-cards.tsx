import React, {useState} from 'react';
import Card from '../card/card';
import {Offers} from '../../types/offers';

type AppProps = {
  city: string,
  offers: Offers,
};

function ListCards({city, offers}: AppProps):JSX.Element {
  const [activeCard, setActiveCard] = useState('0');

  const handleMouseEnterEvent = (id: string) => {
    setActiveCard(id ? id : activeCard);
  };

  const handleMouseLeaveEvent = () => {
    setActiveCard('0');
  };

  const filterOffers = offers.filter((offer) => offer.city === city);

  return (
    <>
      {
        filterOffers.map((offer) => (
          <Card
            onMouseEnter={handleMouseEnterEvent}
            onMouseLeave={handleMouseLeaveEvent}
            key={offer.id}
            offer={offer}
          />
        ))
      }
    </>
  );
}

export default ListCards;
