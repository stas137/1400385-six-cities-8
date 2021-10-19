import React, {MutableRefObject, useState} from 'react';
import Card from '../card/card';
import {Offers} from '../../types/offers';

type AppProps = {
  city: string,
  offers: Offers,
};

function ListCards({city, offers}: AppProps):JSX.Element {
  const [activeCard, setActiveCard] = useState(null);

  const handleMouseEnterEvent = (cardRef: MutableRefObject<null>) => {
    setActiveCard(cardRef.current ? cardRef.current : activeCard);
  };

  const handleMouseLeaveEvent = () => {
    setActiveCard(null);
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
