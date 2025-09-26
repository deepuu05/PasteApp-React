
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import ViewPaste from './components/ViewPaste'
import Navbar from './components/Navbar'
import Paste from './components/Paste'



const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <Navbar />
      <Home />
    </div>
  },
  {
    path: '/pastes',
    element: <div>
      <Navbar />
      <Paste />

    </div>
  },
  {
    path: '/pastes/:id',
    element: <div>
      <Navbar />
      <ViewPaste />
    </div>
  },
])

function App() {


  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
