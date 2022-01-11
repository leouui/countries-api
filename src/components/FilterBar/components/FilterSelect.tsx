const data = [
    {name:"africa",jsxName:"Africa"},
    {name:"america",jsxName:"America"},
    {name:"asia",jsxName:"Asia"},
    {name:"europe",jsxName:"Europe"},
    {name:"oceania",jsxName:"Oceania"},
]

const FilterSelect = () => {
    return <div className="filter-select p-relative">
        <div className="filter-select-icon d-flex fx-center fy-center p-absolute">
            <i className="far fa-chevron-down"></i>
        </div>

        <select defaultValue="default" className="filter-select__select">
            <option className="filter-select__item filter-select__item--not-visible" value="default">Filter by Region</option>
            { data.map(({name,jsxName}) => <option key={name} className="filter-select__item" value={name}>{jsxName}</option> ) }

        </select>
    </div>
}

export default FilterSelect