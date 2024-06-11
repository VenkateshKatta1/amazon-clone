import useSearchStore from '../../store/SearchStore';

function SearchBar() {

  const { searchTerm, setSearchTerm, setIsFocused } = useSearchStore((state) => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
    setIsFocused: state.setIsFocused,

  }));

  console.log(searchTerm);

  return (
    <div className="flex-grow">
      <input className="w-full py-2 px-4 border rounded"
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Search Amazon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsFocused(true)}
      />
    </div>


  );
}

export default SearchBar;