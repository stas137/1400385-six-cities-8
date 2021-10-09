import {useState} from 'react';
import Card from '../card/card';
import {Offers} from '../../types/offers';

//{Array.from({length: countCard}, (value, key) => <Card offer={firstOffer} />)}

type AppProps = {
  city: string,
  offers: Offers,
};

function ListCards({city, offers}: AppProps):JSX.Element {
  const [state, setState] = useState('0');

  return (
    <>
      {
        offers.map((offer) => (
          offer.city === city ?
            <Card
              onMouseOver={() => {
                setState(offer.id ? offer.id : state);
              }}
              key={offer.id}
              offer={offer}
            /> :
            <>
            </>
        ),
        )
      }
    </>
  );
}

export default ListCards;
