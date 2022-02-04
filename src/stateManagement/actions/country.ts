import { countryItemInterface } from '../../interfaces/interfaces';

export type countryActions = 
    | {type:"setCountries", payload:countryItemInterface[] }
    | {type:"getCountriesByName",payload:string}
    | {type:"setLoading", payload:Boolean}

const getCountry = async(url:RequestInfo) => {
    const res = await fetch(url)
    return await res.json()
}

const setLoading = (load:Boolean) => ({
    type:"setLoading",
    payload:load
})

const setData = (data:Object[]) => ({
    type:"setCountries",
    payload:data
})

export const startGetCountriesByRegion = async(region:string,dispatch:React.Dispatch<any>) => {
    dispatch(setLoading(true))
    const countries = await getCountry(`https://restcountries.com/v3.1/region/${region}`)  
    dispatch(setData(countries))
}

export const startGetCountriesByName = async(name:string,dispatch:React.Dispatch<any>) => {
    dispatch(setLoading(true))
    const countries = await new Promise((resolve) => setTimeout(() => resolve(name),200))
    dispatch({type:"getCountriesByName",payload:countries})
}

export const startGetAllCountries = async(dispatch:React.Dispatch<any>) => {
    dispatch(setLoading(true))
    const countries = await getCountry(`https://restcountries.com/v3.1/all`)
    dispatch(setData(countries))
}