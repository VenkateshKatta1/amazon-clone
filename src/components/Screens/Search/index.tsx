import { useCallback, useEffect } from 'react'
import useSearchStore from '../../../store/SearchStore';
import { GetProducts } from '../../../services/BackendServices';
import ProductInfo from '../Home/Products';

function ProductSearch() {
  const { products, setProducts } = useSearchStore((state) => ({
    products: state.products,
    setProducts: state.setProducts,
  }));

  const getProducts = useCallback(async () => {
    const result = await GetProducts();
    setProducts(result?.products || []);
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  if (!products?.length) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-5 border flex flex-col gap-5">
      <h1 className="text-blue-600 font-semibold">Products:</h1>
      <ul className="flex gap-4 flex-wrap">
        {products.map((products) => (
          <li key={products.asin}>
            <ProductInfo {...products} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSearch;