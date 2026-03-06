interface InputProps{
placeholder?: string,
onChange: (value: string) => void,
value:string
}

export function Inputbox({ placeholder,onChange,value }: InputProps) {

  return (
    <div>
      <input placeholder= {placeholder} 
              onChange= {(e)=> onChange(e.target.value)}
              value={value}
              name="firstname" id="" 
              className='p-2 w-60 h-10 border rounded-xl;'
              >
      </input>
    </div>
  )
}