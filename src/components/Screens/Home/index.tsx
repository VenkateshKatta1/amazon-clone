import SearchBar from '../../SearchBar';
import Deals from './Deals';
import ProductCategories from './ProductCategories';

function HomeScreen() {
    return (
        <div>
            <SearchBar />
            <div>HomeScreen</div>
            <ProductCategories />
            <Deals />
        </div>
    );
}

export default HomeScreen;
