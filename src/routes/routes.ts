import { Home,CountryDetails } from "../views"

interface routesInterface {
    path:string,
    to?:string,
    Component:() => JSX.Element
}

export const routes : routesInterface[] = [
    {
        path:"/",
        to:"/",
        Component:Home
    },
    {
        path:":countryId",
        to:"/",
        Component:CountryDetails
    },
]