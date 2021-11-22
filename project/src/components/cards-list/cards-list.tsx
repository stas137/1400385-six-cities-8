import React from 'react';
import Card from '../card/card';
import {Offers} from '../../types/offers';
import {Type} from '../../utils/const';

type CardsListProps = {
  currentCityOffers: Offers,
  type: Type,
  offerCurrentId: number | null,
};

function CardsList({currentCityOffers, type, offerCurrentId}: CardsListProps):JSX.Element {

  return (
    <>
      {
        currentCityOffers.map((offer) => (
          <Card
            key={offer.id}
            offer={offer}
            type={type}
            offerCurrentId={offerCurrentId}
          />))
      }
    </>
  );
}

export default CardsList;
