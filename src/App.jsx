import { useContext,useEffect,useState } from 'react'
import { LanguageTranslatorContext } from './ContextStore/Reducers'
import { Header } from './Header'
import { SearchComponent } from './SearchComponent'
import './App.css'

function App() {
  const {fetchData}=useContext(LanguageTranslatorContext)
  const [languageSelected,setLanguageSelected]=useState("en")
  const [word,setword]=useState("")
  useEffect(()=>{
     if (!word.trim()) return;
    fetchData(word,languageSelected)
    
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
      
    </div>  
    </>
  )
}

export default App
