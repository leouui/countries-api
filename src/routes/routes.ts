import {DashRoutes} from "./routes/index"

interface routesInterface {
    path:string,
    to?:string,
    Component:() => JSX.Element
}

export const routes : routesInterface[] = [
    {
        path:"/*",
        to:"/",
        Component:DashRoutes
    }
]