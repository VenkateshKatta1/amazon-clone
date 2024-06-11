import { useCallback, useEffect } from 'react';
import { GetDeals } from '../../../../services/BackendServices';
import useHomeStore from '../../../../store/HomeStore';
import DealInfo from './Deal';

function Deals() {
    const { deals, setDeals } = useHomeStore((state) => ({
        deals: state.deals,
        setDeals: state.setDeals,
    }));

    const getDeals = useCallback(async () => {
        const result = await GetDeals();
        setDeals(result);
    }, []);

    useEffect(() => {
        getDeals();
    }, []);

    if (!deals?.length) {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-5 border flex flex-col gap-5">
            <h1 className="text-blue-600 font-semibold">Deals:</h1>
            <ul className="flex justify-evenly flex-wrap" >
                {deals.map((deal) => (
                    <li key={deal.deal_id}>
                        <DealInfo {...deal} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Deals;
