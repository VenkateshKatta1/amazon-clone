import useSearchStore from '../../store/SearchStore';

function SearchBar() {

  const { searchTerm, setSearchTerm, setIsFocused } = useSearchStore((state) => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
    isFocused: state.isFocused,
    setIsFocused: state.setIsFocused,

  }));

  const focusFunction = () => {
    setIsFocused(true);
  }

  console.log(searchTerm);

  return (
    <div >
      <div className='' >
        <input className="w-full my-5 py-3 px-5 border"
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Search Amazon"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => focusFunction()}
        />
      </div>

    </div>

  );
}

export default SearchBar;