interface InputProps{
placeholder?: string
}

export function Inputbox({ placeholder }: InputProps) {

  return (
    <div>
      <input placeholder= {placeholder} 
              name="firstname" id="" 
              className='p-2 w-60 h-10 border rounded-xl;'
              >
      </input>
    </div>
  )
}