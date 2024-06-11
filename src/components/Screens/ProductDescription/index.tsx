import { useCallback, useEffect, useState } from 'react';
import useAppStore from '../../../store/AppStore';
import { GetProductDetails } from '../../../services/BackendServices';
import { ProductDetailsData } from '../../../types';

function ProductDescription() {

  const { selectedASIN } = useAppStore((state) => ({
    selectedASIN: state.selectedASIN,

  }));
  const [productDetailsData, setProductDetailsData] = useState<ProductDetailsData | null>(null)



  const fetchProductDetails = useCallback(async () => {
    if (selectedASIN) {
      const response = await GetProductDetails(selectedASIN);
      setProductDetailsData(response)
      console.log("response", typeof (response));
    }
  }, [])

  useEffect(() => {
    fetchProductDetails()
    console.log("ASIN", (productDetailsData));
  }, [])

  if (!productDetailsData) {
    return <p>Loading...</p>
  }

  const {
    product_title,
    product_photos,
    category_path,
    product_variations,
  } = productDetailsData;

  return (
    <div className='flex-wrap'>
      <div className='items-center justify-center border'>
        <ul>
          {product_photos.length > 0 && (
            <li >
              <h3>Product Photos:</h3>
              <div className='flex space-x-3'>
                {product_photos.map((photo, index) => (
                  <img width={100} key={index} src={photo} alt={`${product_title} ${index + 1}`} />
                ))}
                <span className=''>{product_title}</span>
              </div>
            </li>
          )}
          {category_path.length > 0 && (
            <li className='flex border my-2'>
              <h3>Category Path: </h3>
              <ul className='flex px-3'>
                {category_path.map((category) => (
                  <li className='px-3' key={category.id}>
                    <a href={category.link} target="_blank" rel="noopener noreferrer">
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          )}
          {product_variations.size?.length > 0 && (
            <li className='flex'>
              <h3>Available Sizes:</h3>
              <ul className='flex'>
                {product_variations.size.map((size) => (
                  <li className='border px-3' key={size.asin}>{size.value} - {size.is_available ? 'Available' : 'Unavailable'}</li>
                ))}
              </ul>
            </li>
          )}
          {product_variations.color?.length > 0 && (
            <li>
              <h3>Available Colors:</h3>
              <div className="flex space-x-2">
                {product_variations.color.map((color) => (
                  <div key={color.asin}>
                    <img src={color.photo} alt={color.value} />
                    <div>{color.value} - {color.is_available ? 'Available' : 'Unavailable'}</div>
                  </div>
                ))}
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ProductDescription;