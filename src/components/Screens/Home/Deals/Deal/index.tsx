import { Deal } from '../../../../../types';

function DealInfo(deal: Deal) {
    const { deal_photo, deal_title, deal_price, list_price, savings_amount, deal_badge, deal_url } = deal;
    return (
        <a href={deal_url} target='_blank' className='flex flex-col gap-5 border px-3 py-4 w-80 h-80 bg-white hover:bg-gray-200 cursor-pointer'>
            <div className='flex gap-3'>
                <div>
                    <img className='h-24 w-36' src={deal_photo} />
                </div>
                <div>
                    <div className='flex gap-5'>
                        <span>List Price: <span className='font-bold'>${list_price.amount}</span></span>
                        <span>Deal Price: <span className='font-bold'>${deal_price.amount}</span></span>
                    </div>
                    <div>
                        Savings: <span className='font-bold'>${savings_amount.amount}</span>
                    </div>
                    <div className='text-red-600 font-bold'>
                        {deal_badge}
                    </div>
                </div>
            </div>
            <p className='max-w-full text-ellipsis overflow-hidden'>{deal_title}</p>
        </a>
    );
}

export default DealInfo;
