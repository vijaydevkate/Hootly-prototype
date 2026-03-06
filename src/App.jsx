
import './App.css'
import { Inputbox } from './component/Inputbox'
import { Button } from './component/Button'
import { useState } from 'react'

function App() {

  const [textvalue, Settextvalue] = useState("")

  const submit= ()=>{
    console.log(textvalue)
  }

  return (
    <>
    <div className=' flex justify-center items-center h-screen flex-col gap-4'>
        <div className='flex justify-start gap-4'>
          <Inputbox placeholder='Full Name' onChange={Settextvalue} value={textvalue}/>
          <Inputbox placeholder='Domain name'/>
        </div>
        <Button text= "Submit" onclick={submit}></Button>

    </div>
    </>
  )
}

export default App
