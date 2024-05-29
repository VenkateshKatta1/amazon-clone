import { ProductData } from '../../../../types';

function ProductInfo(product: ProductData) {
  const { product_photo, product_title, product_price, product_url } = product;
  return (
    <a href={product_url} target='_blank' className='flex flex-col gap-5 border px-3 py-4 w-80 h-80 bg-white hover:bg-gray-200 cursor-pointer'>
      <div className='flex gap-3'>
        <div>
          <img className='h-20 w-20' src={product_photo} />
        </div>
        <div>
          <div className='flex gap-5'>
            <span>Product Price: <span className='font-bold'>${product_price}</span></span>
          </div>
        </div>
      </div>
      <p className='max-w-full text-ellipsis overflow-hidden'>{product_title}</p>
    </a>
  );
}

export default ProductInfo;
