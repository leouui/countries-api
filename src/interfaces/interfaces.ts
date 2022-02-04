export interface countryItemInterface {
    name:{common:string},
    population:string,
    region:string,
    capital:string[],
    flags:{
        png:string,
        svg:string,
    }
} 

export interface countryInitState {
    country:{
        data:countryItemInterface[],
        filter_data:countryItemInterface[],
        loading:Boolean,
        error:string | null
    }
}