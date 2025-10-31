import {useState} from 'react'
import Topbar from './components/Topbar'
import Midbody from './components/Midbody'
import Bottbar from './components/Bottbar'
import Weather from './components/Weather'

function App() {
  const [page,setPage]= useState('home');
  return (
    <div className="app-container">
      <Topbar setPage={setPage}/>
      <div style={{ flex: 1 }}>
        {page === 'home' && <Midbody />}
        {page === 'weather' && <Weather />}
      </div>
      <Bottbar/>
    </div>
  )
}

export default App