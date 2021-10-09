import Card from '../card/card';
import {Offers} from '../../types/offers';

//{Array.from({length: countCard}, (value, key) => <Card offer={firstOffer} />)}

type AppProps = {
  offers: Offers,
};

function ListCards({offers}: AppProps):JSX.Element {
  return (
    <>
      {
        offers.map((offer, id) => {
          const keyValue = `${id}-${offer.title}`;
          return (
            <Card key={keyValue} offer={offer}/>
          );
        })
      }
    </>
  );
}

export default ListCards;
