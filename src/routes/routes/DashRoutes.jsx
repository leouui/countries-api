import { Routes,Route } from "react-router-dom"
import { Home ,CountryDetails} from "../../views"

const DashRoutes = () => {
    return <div>
        <h1>xd</h1>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path=":countryId" element={<CountryDetails/>} />
        </Routes>
    </div> 
}

export default DashRoutes