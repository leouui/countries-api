import { useContext } from "react"
import { FilterBar } from "../component"
import { CountryContext } from "../stateManagement/context/context"

const Home = () => {
    const {state,dispatch} = useContext(CountryContext)

    return <>
        <FilterBar/>
    </>
}

export default Home