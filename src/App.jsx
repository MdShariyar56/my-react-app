import './App.css'
import { Suspense } from 'react'
import Countries from './Components/Countries/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())
function App() {
  

  return (
    <>
     
      <Suspense fallback={<p>Nadir vhai loading......</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    
    </>
  )
}

export default App
