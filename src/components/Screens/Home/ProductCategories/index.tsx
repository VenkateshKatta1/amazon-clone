import { useCallback, useEffect } from 'react';
import useHomeStore from '../../../../store/HomeStore';
import { GetProductCategoryList } from '../../../../services/BackendServices';

function ProductCategories() {
    const { productCategories, setProductCategories } = useHomeStore(
        (state) => ({
            productCategories: state.productCategories,
            setProductCategories: state.setProductCategories,
        })
    );

    const getProductCategories = useCallback(async () => {
        const result = await GetProductCategoryList();
        setProductCategories(result);
    }, []);

    useEffect(() => {
        getProductCategories();
    }, []);

    if (!productCategories?.length) {
        return <p>Loading</p>;
    }

    return (
        <div className="p-5 border flex flex-col gap-5">
            <h1 className="text-blue-600 font-semibold">Product Categories:</h1>
            <ul className="flex gap-4 flex-wrap">
                {productCategories.splice(5, 20).map(({ id, name }) => (
                    <li key={id}>
                        <a className="text-blue-600 underline" href="">
                            {name}
                        </a>{' '}
                        |
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductCategories;
