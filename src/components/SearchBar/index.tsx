import useSearchStore from '../../store/SearchStore';
import Deals from '../Screens/Home/Deals';
import SearchScreen from '../Screens/Search/SearchScreen';
import ProductSearch from '../Screens/Search';
import ProductCategories from '../Screens/Home/ProductCategories';



function SearchBar() {

  const { searchTerm, setSearchTerm, isFocused, setIsFocused } = useSearchStore((state) => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
    isFocused: state.isFocused,
    setIsFocused: state.setIsFocused,

  }));

  const focusFunction = () => {
    setIsFocused(true);
  }

  const blurFunction = () => {
    if (!searchTerm?.length) {
      setIsFocused(false);
    }
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
          onBlur={() => blurFunction()}
        />
      </div>
      <div>
        {!isFocused ? (<div>
          <ProductCategories />
          <Deals />
        </div>) : (<div>
          <SearchScreen />
          <ProductSearch />
        </div>)}
      </div>
    </div>

  );
}

export default SearchBar;
