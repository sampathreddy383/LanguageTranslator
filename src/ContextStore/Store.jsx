import {  useReducer } from "react";
import {initialtranslatorstate,dataFetchReducers} from './Reducers'
import { LanguageTranslatorContext } from "./Reducers";

export const DataProvider=({children})=>{
    const [state,dispatch]=useReducer(dataFetchReducers,initialtranslatorstate)
    const fetchData=async (word,lan='en')=>{
        dispatch({type:"FETCH_START"})
        try{
            const data=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/${lan}/${word}`)
            if(!data.ok){throw new Error("no word meaning fetched")}
            const res=await data.json()
            dispatch({type:'FETCH_SUCCESS',payload:res})
        }
        catch(err){
            dispatch({type:'FETCH_FAILURE',payload:err.message})
        }
    }
        

        return (
            <LanguageTranslatorContext.Provider value={{state,fetchData}}>
                {children}
            </LanguageTranslatorContext.Provider>
        )

}