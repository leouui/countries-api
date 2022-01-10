import { useReducer } from "react"
import { Routes,Route } from "react-router-dom"
import { Home,CountryDetails} from "../views"
import { countryReducer } from "../stateManagement/reducers/countryReducer"
import { CountryContext } from "../stateManagement/context/context"
import { countryInitialState } from "../stateManagement/reducers/initialState"

const CountryContent = () => {
    const [state,dispatch] = useReducer(countryReducer,countryInitialState)

    return <CountryContext.Provider value={{state,dispatch}}>
        <div className="content__pages-container w-page">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path=":countryId" element={<CountryDetails/>} />
            </Routes>
        </div>
    </CountryContext.Provider> 
}

export default CountryContent