import { createContext } from "react";
import { countryInitState } from "../reducers/initialState";

type Actions = 
    | { type:"setCountryData", payload:Object[] }
    | { type:"setLoading", payload:Boolean }

interface countryContext {
    state:countryInitState,
    dispatch:React.Dispatch<Actions>
}

export const CountryContext = createContext<countryContext>({} as countryContext)