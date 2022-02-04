import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../helpers/getData";
import { countryItemInterface } from './../interfaces/interfaces';

export const useCountry = (name:string) => {
    const [fetchState,setFetchState] = useState<{data:countryItemInterface[],loading:boolean}>({data:[],loading:true})
    const navigate = useNavigate()

    useEffect(()=>{
        (async ()=>{
            const country = await getData(`https://restcountries.com/v3.1/name/${name}`)
            if(country.status) return navigate("/") // not found page
            const filterData = country.filter((e:countryItemInterface) => e.name.common.toLowerCase().includes(name))
            setFetchState(state=>({...state,data:filterData}))
            setFetchState(state=> ({...state,loading:false}))
        })()
    },[name,navigate])

    return fetchState
}