import {State} from '../../types/state';
import {Dispatch} from 'redux';
import {Actions} from '../../types/action';
import {changeOption} from '../../store/action';
import {connect, ConnectedProps} from 'react-redux';

type SortOptionProps = {
  indexOption: number,
  nameOption: string,
}

const mapStateToProps = ({currentOption}: State) => ({
  currentOption,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeOption(nameOption: string) {
    dispatch(changeOption(nameOption));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & SortOptionProps;

function SortOption({indexOption, nameOption, currentOption, onChangeOption}: ConnectedComponentProps):JSX.Element {
  return (
    <li className={currentOption === nameOption ? 'places__option places__option--active' : 'places__option'} tabIndex={indexOption} onClick={() => onChangeOption(nameOption)}>{nameOption}</li>
  );
}

export {SortOption};
export default connector(SortOption);
