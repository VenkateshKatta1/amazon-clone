import SearchBar from "../../SearchBar";
import ProductCategories from './ProductCategories';

function HomeScreen() {
  return (
    <div>
      <SearchBar />
      <div>HomeScreen</div>
      <ProductCategories />
    </div>
  )
}

export default HomeScreen;