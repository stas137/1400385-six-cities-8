import React from 'react';
import Card from '../card/card';
import {Offers} from '../../types/offers';
import {Type} from '../../utils/const';

type CardsListProps = {
  currentCityOffers: Offers,
  type: Type,
};

function CardsList({currentCityOffers, type}: CardsListProps):JSX.Element {

  return (
    <>
      {
        currentCityOffers.map((offer) => (
          <Card
            key={offer.id}
            offer={offer}
            type={type}
          />))
      }
    </>
  );
}

export default CardsList;
