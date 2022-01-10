import {initState} from "../reducers/initialState"

type Actions = 
    | { type:"setCountryData", payload:Object[] }
    | { type:"setLoading", payload:Boolean }

export const countryReducer = (state:initState,action:Actions) : initState => {
    switch (action.type) {
        case "setCountryData":
            return {
                ...state,
                country:{
                    ...state.country,
                    data:action.payload,
                }
            }
        case "setLoading":
            return {
                ...state,
                country:{
                    ...state.country,
                    loading:action.payload
                }
            }
        default:
            return state
    }
}