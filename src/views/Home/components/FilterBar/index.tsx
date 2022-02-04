import { memo } from "react"
import { FilterSelect, SearchForm } from "./components"
import "./styles.css"

const FilterBar = memo(() => {
    return <div className="filter-bar w-100 d-flex fx-between f-wrap">
        <SearchForm/>
        <FilterSelect/>
    </div>
})

export default FilterBar