import { Deal } from '../../../../../types';

function DealInfo(deal: Deal) {
    const { deal_photo, deal_title } = deal;
    return (
        <div>
            <div>
                <img height={80} width={80} src={deal_photo} />
            </div>
            <div>
                <p>{deal_title}</p>
            </div>
        </div>
    );
}

export default DealInfo;
