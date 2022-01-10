export interface countryInitState {
    country:{
        data:Object[],
        loading:Boolean
    }
}

export const countryInitialState : countryInitState = {
    country:{
        data:[],
        loading:false
    }
} 