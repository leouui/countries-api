import {useCountriesContext,useForm} from "../../../../../hooks"
import {startGetCountriesByName} from "../../../../../stateManagement/actions"

const SearchForm = () => {
    const {dispatch} = useCountriesContext()
    const {formValues,onChange,onSubmitEvt} = useForm({
        initialValues:{search: ""},
        handleSubmit:(values) => startGetCountriesByName(values.search.trim().toLowerCase(),dispatch)
    })

    return <form className="form form--search" onSubmit={onSubmitEvt}>
        <div className="p-relative">
            <div className="icon-search"><i className="far fa-search"></i></div>
            <input 
                type="text" 
                value={formValues.search} 
                onChange={onChange} 
                name="search" 
                autoComplete="off" 
                className="form__item form__item--form-search"
                placeholder="Search for a country..."
            />
        </div>
    </form>
}

export default SearchForm