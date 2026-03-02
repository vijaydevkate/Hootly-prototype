
import './App.css'
import { Inputbox } from './component/Inputbox'
import { Button } from './component/Button'

function App() {
  return (
    <>
    <div className=' flex justify-center items-center h-screen flex-col gap-4'>
        <div className='flex justify-start gap-4'>
          <Inputbox placeholder='Full Name'/>
          <Inputbox placeholder='Domain name'/>
        </div>
        <Button text= "Submit"></Button>

    </div>
    </>
  )
}

export default App
