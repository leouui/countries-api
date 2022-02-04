import {useParams} from "react-router-dom"
import {useCountry} from "../../hooks"
import {Details} from "./components/Details"

export const CountryDetails = () => {
    const {countryId} = useParams()
    const {loading,data} = useCountry(countryId?.trim().toLowerCase() || "")

    return (
        <>
            {
                loading
                    ? <div className="w-100 d-flex fx-center" >Cargando...</div>
                    : <Details data={data[0]}/>
            }
        </>
    )
}