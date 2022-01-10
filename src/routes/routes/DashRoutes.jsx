import { Routes,Route } from "react-router-dom"
import { Home ,CountryDetails} from "../../views"
import { NavBar } from "../../layout"

const DashRoutes = () => {
    return <div className="content__principal">
        <NavBar/>
        <div className="content__pages-container w-page">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path=":countryId" element={<CountryDetails/>} />
            </Routes>
        </div>
    </div> 
}

export default DashRoutes