import { useContext } from "react"
import { CountryContext } from "../stateManagement/context/context"
import { FilterBar } from "../components"

const Home = () => {
    const {state,dispatch} = useContext(CountryContext)

    return <>
        <FilterBar/>
    </>
}

export default Home