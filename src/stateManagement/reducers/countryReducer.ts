import {countryInitState} from "../../interfaces/interfaces"
import {countryActions} from "../actions/country"

export const countryReducer = (state:countryInitState,action:countryActions) : countryInitState => {
    switch (action.type) {
        case "setCountries":
            return {
                ...state,
                country:{
                    ...state.country,
                    loading:false,
                    data:action.payload,
                    filter_data:action.payload
                }
            }
        case "setLoading" : 
            return {
                ...state,
                country:{
                    ...state.country,
                    loading:action.payload
                }
            }
        case "getCountriesByName":
            const filter = state.country.data.filter(c => c.name.common.toLowerCase().includes(action.payload))

            return {
                ...state,
                country:{
                    ...state.country,
                    filter_data: filter,
                    error:filter.length < 1 ? `No se encontraron resultados para "${action.payload}"` : null,
                    loading:false,
                }
            }
        default:
            return state
    }
}