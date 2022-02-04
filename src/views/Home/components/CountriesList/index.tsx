import { CountryCard } from "./CountryItem"
import {countryItemInterface} from "../../../../interfaces/interfaces"
import "./styles.css"

const CountriesList = ({data} : {data:countryItemInterface[]}) => {
    return <div className="countries">
        {data.map(e=> <CountryCard key={e.name.common} {...e} /> )}
    </div>
}

export default CountriesList