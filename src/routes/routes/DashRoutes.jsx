import { Routes,Route } from "react-router-dom"
import { Home ,CountryDetails} from "../../views"
import { NavBar } from "../../layout"

const DashRoutes = () => {
    return <div className="content__principal">
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path=":countryId" element={<CountryDetails/>} />
        </Routes>
    </div> 
}

export default DashRoutes