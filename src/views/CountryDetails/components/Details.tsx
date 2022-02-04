import { countryItemInterface } from '../../../interfaces/interfaces';

export const Details = ({data} : {data:countryItemInterface}) => {
    const {flags:{png}} = data

    return <div className="animate__animated animate__fadeIn">
        {
            JSON.stringify(data,null,3)
        }
    </div>;
}