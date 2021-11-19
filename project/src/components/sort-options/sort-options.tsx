import SortOption from '../sort-option/sort-option';

type SortOptionsProps = {
  listOptions: string[],
}

function SortOptions({listOptions}: SortOptionsProps):JSX.Element {

  return (
    <ul className="places__options places__options--custom places__options--opened" data-testid="sort-options">
      {
        listOptions.map((option, index) => (
          <SortOption
            key={option}
            indexOption={index}
            nameOption={option}
          />
        ))
      }
    </ul>
  );
}

export default SortOptions;
