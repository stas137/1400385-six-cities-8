import CardsList from '../cards-list/cards-list';
import Logo from '../logo/logo';
import CitiesList from '../cities-list/cities-list';
import SortOptions from '../sort-options/sort-options';
import Map from '../map/map';
import {Type} from '../../const';
import {Offer} from '../../types/offers';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';

const mapStateToProps = ({currentCity, currentOption, selectedOfferId, offers, listOptions}: State) => ({
  currentCity,
  currentOption,
  selectedOfferId,
  offers,
  listOptions,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Main(props: PropsFromRedux):JSX.Element {
  const {currentCity, currentOption, selectedOfferId, offers, listOptions} = props;
  const currentCityOffers = offers.filter((offer) => offer.city === currentCity);

  let currentCityOffersAfterSort = [...currentCityOffers];

  const compareLowToHigh = (a:Offer, b:Offer) => (a.price > b.price ? 1 : -1);
  const compareHighToLow = (a:Offer, b:Offer) => (a.price > b.price ? -1 : 1);
  const compareTopRated = (a:Offer, b:Offer) => (a.rate > b.rate ? -1 : 1);

  const onChangeActiveOption = () => {

    switch (currentOption) {
      case 'Price: low to high':
        currentCityOffersAfterSort = [...currentCityOffers].sort(compareLowToHigh);
        break;
      case 'Price: high to low':
        currentCityOffersAfterSort = [...currentCityOffers].sort(compareHighToLow);
        break;
      case 'Top rated first':
        currentCityOffersAfterSort = [...currentCityOffers].sort(compareTopRated);
        break;
      default:
        currentCityOffersAfterSort = [...currentCityOffers];
        break;
    }
  };

  onChangeActiveOption();

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <SortOptions
                  listOptions={listOptions}
                />
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
