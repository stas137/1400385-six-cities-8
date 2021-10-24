import {State} from '../../types/state';
import {Dispatch} from 'redux';
import {Actions} from '../../types/action';
import {changeCity} from '../../store/action';
import {connect, ConnectedProps} from 'react-redux';

type CityProps = {
  cityOffer: string;
}

const mapStateToProps = ({currentCity}: State) => ({
  currentCity,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeCity(city: string) {
    dispatch(changeCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & CityProps;

function City({currentCity, cityOffer, onChangeCity}: ConnectedComponentProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className={currentCity === cityOffer ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} href="/#" onClick={() => onChangeCity(cityOffer)}>
        <span>{cityOffer}</span>
      </a>
    </li>
  );
}

export {City};
export default connector(City);
