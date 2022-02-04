import {useContext} from "react"
import { CountryContext } from "../stateManagement/context/context"

export const useCountriesContext = () => {
    const {state,dispatch} = useContext(CountryContext)
    return {state,dispatch}
};
