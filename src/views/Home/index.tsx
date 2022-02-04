import { useLayoutEffect } from "react"
import { useCountriesContext } from "../../hooks"
import { CountriesList, FilterBar } from "./components"
import {startGetAllCountries} from "../../stateManagement/actions"

export const Home = () => {
    const {state,dispatch} = useCountriesContext()
    const {loading,filter_data,error} = state.country
    
    useLayoutEffect(() => {
        startGetAllCountries(dispatch)
    },[dispatch])

    return <>
        <FilterBar/>
        {
            error !== null 
                ? <div className="w-100 d-flex fx-center">{error}</div>     
                : loading 
                    ? <div className="w-100 d-flex fx-center">Cargando...</div> 
                    : <CountriesList data={filter_data}/>
        }
    </>
}