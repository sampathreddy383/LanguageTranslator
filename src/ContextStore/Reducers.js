import { createContext } from "react"
export const initialtranslatorstate={
    error:null,
    loading:false,
    fetchdata:[]
}
export const dataFetchReducers=(state,action)=>{
    switch(action.type){
        case "FETCH_START":
            return {...state,loading:true,error:null}
        case "FETCH_SUCCESS":
            return {...state,loading :false,error:null,fetchdata:action.payload}
        case "FETCH_FAILURE":
            return {...state,loading:false,error:action.payload,fetchdata:[]}
        default:
            return {...state}
    }
}

export const LanguageTranslatorContext=createContext()