import FavoriteCard from '../favorite-card/favorite-card';
import {Offers} from '../../types/offers';
import {Link} from 'react-router-dom';

type FavoriteListProp = {
  city: string,
  offers: Offers,
}

function FavoriteList({city, offers}: FavoriteListProp):JSX.Element {

  return (
    <li className="favorites__locations-items" key={city}>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="/">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {
          offers.filter((offer) => (offer.city.name === city)).map((offer) => (
            <FavoriteCard
              key={offer.id}
              offer={offer}
            />
          ))
        }
      </div>
    </li>
  );
}

export default FavoriteList;
