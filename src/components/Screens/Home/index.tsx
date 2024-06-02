import SearchBar from '../../SearchBar';
import ProductCategories from './ProductCategories';
import SearchScreen from '../Search/SearchScreen';
import ProductSearch from '../Search';
import useSearchStore from '../../../store/SearchStore';
import Deals from './Deals';



function HomeScreen() {
    const { isFocused } = useSearchStore((state) => ({
        isFocused: state.isFocused,
    }));
    return (
        <div>
            <SearchBar />
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

export default HomeScreen;
