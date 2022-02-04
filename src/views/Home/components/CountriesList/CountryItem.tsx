import { memo} from "react"
import { Link } from "react-router-dom"
import {countryItemInterface} from "../../../../interfaces/interfaces"
import "./styles.css"

export const CountryCard = memo(({name:{common:name},population,region,capital,flags:{png}} : countryItemInterface) => {
    return <Link className="countries__item animate__animated animate__fadeIn" to={`/${name.toLowerCase()}`}>
        <img src={png} alt={name} />
        
        <div className="countries__content-info">
            <h1 className="countries__item-name">{name}</h1>
            <ul className="countries__info-container">
                <li className="countries__info-item">
                    <p className="countries__info"><span className="countries__title-info">Population: </span>{population}</p>
                </li>
                <li className="countries__info-item">
                    <p><span className="countries__title-info">Region: </span>{region}</p>
                </li>
                <li className="countries__info-item">
                    <p><span className="countries__title-info">Capital: </span>{capital?.[0] || "---"}</p>
                </li>
            </ul>
        </div>
    </Link>
})