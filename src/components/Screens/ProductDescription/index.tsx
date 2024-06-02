import { useCallback, useEffect, useState } from 'react';
import useAppStore from '../../../store/AppStore';
import { GetProductDetails } from '../../../services/BackendServices';
import { ProductDetailsData } from '../../../types';

function ProductDescription(): JSX.Element {

  const { selectedASIN } = useAppStore((state) => ({
    selectedASIN: state.selectedASIN,

  }));
  const [productDetailsData, setProductDetailsData] = useState<ProductDetailsData | null | number>(null)



  const fetchProductDetails = useCallback(async () => {
    if (selectedASIN) {
      const response = await GetProductDetails(selectedASIN);
      setProductDetailsData(response)
    }
  }, [])

  useEffect(() => {
    fetchProductDetails()
  }, [])

  if (!productDetailsData) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>Product Description</h1>
    </div>
  )
}

export default ProductDescription;