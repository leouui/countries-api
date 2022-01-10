import {BrowserRouter,Routes,Route} from "react-router-dom";
import { routes } from "./routes";

export const AppRoute = () => {
    return <BrowserRouter>
        <Routes>
            { routes.map(({path,Component}) => <Route key={path} path={path} element={<Component/>} /> ) }
        </Routes>
    </BrowserRouter>
}
