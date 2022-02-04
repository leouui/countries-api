import { useEffect } from "react"
import { useCountriesContext, useForm } from "../../../hooks"
import { startGetCountriesByRegion } from "../../../stateManagement/actions"

const data = [
    {name:"africa",jsxName:"Africa"},
    {name:"america",jsxName:"America"},
    {name:"asia",jsxName:"Asia"},
    {name:"europe",jsxName:"Europe"},
    {name:"oceania",jsxName:"Oceania"},
]

const FilterSelect = () => {
    const {dispatch} = useCountriesContext()
    const {formValues,onChange} = useForm({
        initialValues:{
            filter_region:"default"
        }
    })

    useEffect(()=>{
        if(formValues.filter_region !== "default") startGetCountriesByRegion(formValues.filter_region,dispatch)
    },[formValues,dispatch])

    return <div className="filter-select p-relative">
        <div className="filter-select-icon d-flex fx-center fy-center p-absolute"><i className="far fa-chevron-down"></i></div>

        <select className="filter-select__select" name="filter_region" value={formValues.filter_region} onChange={onChange}>
            <option className="filter-select__item filter-select__item--not-visible">Filter by Region</option>
            { data.map(({name,jsxName}) => <option key={name} className="filter-select__item" value={name}>{jsxName}</option> ) }
        </select>
    </div>
}

export default FilterSelect