import { FilterSelect, SearchForm } from "./components"
import "./styles.css"

const FilterBar = () => {
    return <div className="filter-bar w-100 d-flex fx-between f-wrap">
        <SearchForm/>
        <FilterSelect/>
    </div>
}

export default FilterBar
