
import { Outlet } from 'react-router'
import '../src/styles/App.css'
import { Header } from './components/Header'


function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
