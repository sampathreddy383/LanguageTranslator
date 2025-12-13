import { useContext,useEffect,useState } from 'react'
import { LanguageTranslatorContext } from './ContextStore/Reducers'
import { Header } from './Header'
import { SearchComponent } from './SearchComponent'
import './App.css'
import {DefinitionItem} from './DefinitionItem'

function App() {
  const {state,fetchData}=useContext(LanguageTranslatorContext)
  const [languageSelected,setLanguageSelected]=useState("en")
  const [word,setword]=useState("")
  const {fetchdata}=state
  useEffect(()=>{
     if (!word.trim()) return;

     const timer=setTimeout(()=>{
      console.log(1000,word)
      fetchData(word,languageSelected)
     },1000)
    // fetchData(word,languageSelected)
    return ()=>{console.log('timeout cleared');clearTimeout(timer)}
    
  },[languageSelected,word])
  return (
    <>
    <div className='main'>
      <header className='header'>
        <Header word={word}/>
      </header>
      <div className='SearchnSelect'>
        <SearchComponent word={word} setword={setword} languageSelected={languageSelected} setLanguageSelected={setLanguageSelected}/>
      </div>
      <div className='definitionContainer'>
        <DefinitionItem definition={fetchdata}/>
      </div>
      
    </div>  
    </>
  )
}

export default App
