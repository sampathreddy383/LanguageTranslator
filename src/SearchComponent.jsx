export function SearchComponent({word,setword,languageSelected,setLanguageSelected}){

    
    return (
        <div className="SearchBar">
            <div className="Searchinput">
                <label for="SearchWord">Search for a word</label>
                <input id="SearchWord" type="text" value={word} onChange={(e)=>{setword(e.target.value)}}/>
            </div>
            <div className="SelectLanguage">
                <label for="Language">Select Language</label>
                <select id="Language" onChange={(e)=>{setLanguageSelected(e.target.value)}} value={languageSelected}>
    <option value="en">English</option>
    <option value="es">Spanish</option>

    </select>
            </div>
        </div>
    )
}