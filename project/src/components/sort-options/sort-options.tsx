import SortOption from '../sort-option/sort-option';

type SortOptionsProps = {
  listOptions: string[],
  onSortToggle: () => void,
}

function SortOptions({listOptions, onSortToggle}: SortOptionsProps):JSX.Element {

  return (
    <ul className="places__options places__options--custom places__options--opened" data-testid="sort-options">
      {
        listOptions.map((option, index) => (
          <SortOption
            key={option}
            indexOption={index}
            nameOption={option}
            onSortToggle={onSortToggle}
          />
        ))
      }
    </ul>
  );
}

export default SortOptions;
