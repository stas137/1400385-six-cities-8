import City from '../city/city';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {getOffers} from '../../store/offers-data/selectors';

const mapStateToProps = (state: State) => ({
  offers: getOffers(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function CitiesList({offers}: PropsFromRedux): JSX.Element {
  const offerCities = offers.map((offer) => offer.city.name);
  const uniqCities = [...new Set(offerCities)];

  return (
    <ul className="locations__list tabs__list">
      {
        uniqCities.map((cityOffer) => (
          <City
            key={cityOffer}
            cityOffer={cityOffer}
          />
        ))
      }
    </ul>
  );
}

export {CitiesList};
export default connector(CitiesList);
