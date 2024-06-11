import { ProductData } from '../../../../types';
import useAppStore from '../../../../store/AppStore';
import { useCallback } from 'react';


function ProductInfo(product: ProductData) {
  const { product_photo, product_title, product_price, delivery, asin } = product;
  const { setSelectedASIN } = useAppStore((state) => ({
    setSelectedASIN: state.setSelectedASIN,
  }))
  const handleOnClick = useCallback(() => {
    setSelectedASIN(asin);
  }, [])
  return (
    <button onClick={handleOnClick} className='flex flex-col gap-5 border px-3 py-4 w-80 h-80 bg-white hover:bg-gray-200 cursor-pointer'>
      <div className='flex gap-3'>
        <div>
          <img className='h-20 w-20' src={product_photo} loading='lazy' />
        </div>
        <div>
          <div className='flex gap-5'>
            <span>Product Price: <span className='font-bold'>{product_price}</span></span>
          </div>
        </div>
      </div>
      <p className='max-w-full text-ellipsis overflow-hidden'>{product_title}</p>
      <div className='flex gap-5'>
        <span><b>Delivery :</b>${delivery}</span>
      </div>
    </button >
  );
}

export default ProductInfo;
