import { useEffect, useState } from "react"
import "./styles.css"

// false === "ligth"
// true === "dark"

const NavBar = () => {
    const [theme,setTheme] = useState(JSON.parse(localStorage.getItem("dark-theme")))

    useEffect(()=>{
        if(theme) document.body.setAttribute("data-theme","dark") 
        else document.body.setAttribute("data-theme","ligth")
        localStorage.setItem("dark-theme",theme)
    },[theme])

    return <nav className="navbar w-100">
        <div className="navbar__container w-page h-100 d-flex fx-between fy-center">
            <h1 className="navbar__title">Where in the world?</h1>

            <div className="navbar__darkmode-togle" onClick={() => setTheme(theme => !theme)}>
                <i className={`navbar__icon-moon ${!theme ?"far fa-moon":"fas fa-moon"}`}></i>Dark Mode 
            </div>
        </div>
    </nav>
}

export default NavBar