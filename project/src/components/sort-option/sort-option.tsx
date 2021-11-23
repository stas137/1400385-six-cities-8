import {State} from '../../types/state';
import {Dispatch} from 'redux';
import {Actions} from '../../types/action';
import {changeSort} from '../../store/action';
import {connect, ConnectedProps} from 'react-redux';

type SortOptionProps = {
  indexOption: number,
  nameOption: string,
  onSortToggle: () => void,
};

const mapStateToProps = ({BOOK}: State) => ({
  selectedSort: BOOK.selectedSort,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeSort(nameSort: string) {
    dispatch(changeSort(nameSort));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & SortOptionProps;

function SortOption({indexOption, nameOption, onSortToggle, selectedSort, onChangeSort}: ConnectedComponentProps):JSX.Element {
  return (
    <li className={selectedSort === nameOption ? 'places__option places__option--active' : 'places__option'} tabIndex={indexOption}
      onClick={() => {
        onChangeSort(nameOption);
        onSortToggle();
      }}
    >
      {nameOption}
    </li>
  );
}

export {SortOption};
export default connector(SortOption);
