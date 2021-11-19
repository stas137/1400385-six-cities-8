import City from '../city/city';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {getOffers} from '../../store/offers-data/selectors';
import {getCurrentCity} from '../../store/book-process/selectors';

const mapStateToProps = (state: State) => ({
  offers: getOffers(state),
  currentCity: getCurrentCity(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function CitiesList({offers, currentCity}: PropsFromRedux): JSX.Element {
  const offerCities = offers.map((offer) => offer.city.name);
  const uniqCities = [...new Set(offerCities)];

  return (
    <ul className="locations__list tabs__list" data-testid="cities-list">
      {
        uniqCities.map((cityOffer) => (
          <City
            key={cityOffer}
            cityOffer={cityOffer}
            currentCity={currentCity}
          />
        ))
      }
    </ul>
  );
}

export {CitiesList};
export default connector(CitiesList);
