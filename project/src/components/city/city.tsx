import {Dispatch} from 'redux';
import {Actions} from '../../types/action';
import {changeCity} from '../../store/action';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';

type CityProps = {
  cityOffer: string;
  currentCity: string;
}

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeCity(city: string) {
    dispatch(changeCity(city));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & CityProps;

function City({currentCity, cityOffer, onChangeCity}: ConnectedComponentProps): JSX.Element {
  return (
    <li className="locations__item">
      <Link className={currentCity === cityOffer ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} to="/" onClick={() => onChangeCity(cityOffer)}>
        <span>{cityOffer}</span>
      </Link>
    </li>
  );
}

export {City};
export default connector(City);
