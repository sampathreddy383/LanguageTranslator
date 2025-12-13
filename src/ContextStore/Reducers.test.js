import {test,describe,expect} from 'vitest'
import { initialtranslatorstate,dataFetchReducers } from "./Reducers";


describe('dataFetchreducers', () => { 
    test("FETCH_START sets loading true",()=>{
    const state=dataFetchReducers(initialtranslatorstate,{type:"FETCH_START"});
    expect(state.loading).toBe(true)
    expect(state.error).toBe(null)

});
 test("FETCH_SUCCESS updates the fetchdata",()=>{
        const payload=['hello']
        const state=dataFetchReducers(initialtranslatorstate,{
            type:"FETCH_SUCCESS",
            payload
        })
        expect(state.fetchdata).toEqual(payload);
        expect(state.loading).toBe(false)
    })

    
 })


