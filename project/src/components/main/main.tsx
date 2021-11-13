import {SyntheticEvent, useState} from 'react';
import CardsList from '../cards-list/cards-list';
import CitiesList from '../cities-list/cities-list';
import SortOptions from '../sort-options/sort-options';
import Map from '../map/map';
import {Type} from '../../const';
import {sortCurrentCityOffers} from '../../common';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {getCurrentCity, getListOptions, getSelectedOfferId, getSelectedSort} from '../../store/book-process/selectors';
import {ThunkAppDispatch} from '../../types/action';
import {Offer} from '../../types/offers';
import {logoutAction} from '../../store/api-actions';
import {getOffers} from '../../store/offers-data/selectors';
import {getAuthorizationStatus, getUserData} from '../../store/user-process/selectors';
import Header from '../header/header';

const mapStateToProps = (state: State) => ({
  currentCity: getCurrentCity(state),
  selectedSort: getSelectedSort(state),
  selectedOfferId: getSelectedOfferId(state),
  offers: getOffers(state),
  listOptions: getListOptions(state),
  authorizationStatus: getAuthorizationStatus(state),
  userData: getUserData(state),
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onClickLogout() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function Main(props: PropsFromRedux):JSX.Element {

  const {currentCity, selectedSort, selectedOfferId, offers, listOptions, authorizationStatus, userData, onClickLogout} = props;
  const [sortToggle, setSortToggle] = useState<boolean>(false);
  const currentCityOffers = offers.filter((offer: Offer) => offer.city.name === currentCity);
  const currentCityOffersAfterSort = sortCurrentCityOffers(selectedSort, currentCityOffers);

  const onClickHandler = (e: SyntheticEvent<HTMLElement>) => {
    e.preventDefault();
    onClickLogout();
  };

  return (
    <div className="page page--gray page--main">
      <Header
        authorizationStatus={authorizationStatus}
        userData={userData}
        onClickHandler={onClickHandler}
      />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentCityOffers.length} places to stay in {currentCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  {selectedSort}
                  <svg className="places__sorting-arrow" width="7" height="4" onClick={() => setSortToggle(!sortToggle)}>
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                {
                  sortToggle ?
                    <SortOptions
                      listOptions={listOptions}
                    /> : ''
                }
              </form>
              <div className="cities__places-list places__list tabs__content">
                <CardsList
                  currentCityOffers={currentCityOffersAfterSort}
                  type={Type.Main}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  currentCityOffers={currentCityOffersAfterSort}
                  selectedOfferId={selectedOfferId}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export {Main};
export default connector(Main);
