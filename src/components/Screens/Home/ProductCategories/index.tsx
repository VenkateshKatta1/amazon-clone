import { useCallback, useEffect } from 'react';
import useHomeStore from '../../../../store/HomeStore';
import ProductCategoryList from '../../../../services/BackendServices';

function ProductCategories() {
  const { productCategories, setProductCategories } = useHomeStore((state) => ({
    productCategories: state.productCategories,
    setProductCategories: state.setProductCategories
  }));

  const getProductCategories = useCallback(async () => {
    const result = await ProductCategoryList();
    setProductCategories(result);
  }, [])

  useEffect(() => {
    getProductCategories()
  }, [])

  if (!productCategories?.length) {
    return <p>Loading</p>
  }

  return (
    <div>
      <h1>Product Categories</h1>
      <ul>
        {productCategories.map(({ id, name }) => <li key={id}>{name}</li>)}
      </ul>
    </div>
  );
}

export default ProductCategories;