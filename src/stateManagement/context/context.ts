import { createContext } from "react";
import { countryInitState } from "../../interfaces/interfaces";

interface countryContext {
    state:countryInitState,
    dispatch:React.Dispatch<any>
}

export const CountryContext = createContext<countryContext>({} as countryContext)