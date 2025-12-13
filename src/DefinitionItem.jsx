import { useMemo } from "react"
export function DefinitionItem({definition}){
    const filteredefinition=useMemo(()=>definition.map(item=>{
        console.log("function referred")
        return item['meanings']
}),[definition])
let finalddef=filteredefinition.flat(Infinity)
// for(let i=0;i<definition.length;i++){
//     definition[i]
// }
    console.log(finalddef,filteredefinition)
    return (
        <div className="meaning">
            {finalddef&&finalddef.map(def=>{
                const {partOfSpeech,definitions}=def
                return(
                    <>
                    <div>{partOfSpeech}</div>
                    {
                        definitions.map(item=>(
                            <div>
                            <div>{item.definition}</div>
                            <div>{item.example}</div>
                            </div>
                        ))
                    }
                    {/* <div>{def.definitions}</div>
                    <div>{def.synonyms}</div> */}
                    </>
                )
            })}
        </div>
    )
}