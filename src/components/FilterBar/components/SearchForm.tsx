const SearchForm = () => {
    return <form className="form form--search">
        <div className="p-relative">
            <div className="icon-search"><i className="far fa-search"></i></div>
            <input type="text" className="form__item form__item--form-search" placeholder="Search for a country..." />
        </div>
    </form>
}

export default SearchForm
