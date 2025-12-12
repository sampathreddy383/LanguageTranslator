export function Header({word}){
    return (
        <div className="header-dynamic">{word?word:"Dictionary"}</div>
    )
}