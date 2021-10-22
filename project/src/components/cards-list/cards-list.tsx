import React, {useState} from 'react';
import Card from '../card/card';
import {Offers} from '../../types/offers';
import {Type} from '../../const';

type CardsListProps = {
  currentCityOffers: Offers,
  type: Type,
};

function CardsList({currentCityOffers, type}: CardsListProps):JSX.Element {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleMouseEnterEvent = (id: string) => {
    setActiveCard(id ? id : activeCard);
  };

  const handleMouseLeaveEvent = () => {
    setActiveCard(null);
  };

  return (
    <>
      {
        currentCityOffers.map((offer) => (
          <Card
            onMouseEnter={handleMouseEnterEvent}
            onMouseLeave={handleMouseLeaveEvent}
            key={offer.id}
            offer={offer}
            type={type}
          />
        ))
      }
    </>
  );
}

export default CardsList;
