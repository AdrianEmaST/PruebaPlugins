import './App.css'
import Hotjar from '@hotjar/browser'
import Person from './Component/Persons/Person'

function App() {
  const siteId = 3886065;
  const hotjarVersion = 6;
  
  Hotjar.init(siteId, hotjarVersion);

  return (

    <>
    
      <Person />
    
    </>


  )
}

export default App
