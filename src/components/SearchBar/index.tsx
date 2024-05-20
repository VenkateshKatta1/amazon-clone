import useSearchStore from '../../store/SearchStpore';

function SearchBar() {

  const { searchTerm, setSearchTerm } = useSearchStore((state) => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm
  }));

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
          onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
    </div>

  );
}

export default SearchBar;
