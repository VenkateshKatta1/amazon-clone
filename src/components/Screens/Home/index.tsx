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
            {!isFocused ? (<div>
                <Deals />
                <ProductCategories />
            </div>) : (<div>
                <SearchScreen />
                <ProductSearch />
            </div>)}
        </div>
    );
}

export default HomeScreen;
