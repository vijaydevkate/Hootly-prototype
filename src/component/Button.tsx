interface ButtonProps{
text: string
onclick?: () => void
}

const defaultsyles = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
}
export function Button({text, onclick}: ButtonProps){
     
    return(
        <>
        <button onClick={onclick}
        style={defaultsyles} 
        className="bg-blue-300 text-white px-5 py-2 rounded hover:bg-blue-700 transition-colors">
            {text}
        </button>
        </>
    )
}