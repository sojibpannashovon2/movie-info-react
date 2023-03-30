import { useEffect, useState } from 'react'

import './App.css'
import Button from './components/NextComponents/Button'
import NavBar from './components/NextComponents/NavBar'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import SingleMovie from './components/NextComponents/SingleMovie'
import Cart from './components/NextComponents/Cart'
import Contact from './components/NextComponents/Contact';

function App() {
  const [load, setLoad] = useState([])
  const [watchTime, setWatchTime] = useState("")



  const handaleWatchTime = (time) => {
    const previousTime = JSON.parse(localStorage.getItem("watchTime"));
    if (previousTime) {
      const sum = previousTime + time
      localStorage.setItem("watchTime", sum)
      setWatchTime(sum);
    }
    else {
      localStorage.setItem("watchTime", time)
      setWatchTime(time);
    }
  }



  useEffect(() => {
    fetch("/public/Json-data/data.json")
      .then(res => res.json())
      .then(data => setLoad(data))
  }, [])
  console.log(load);



  return (
    <div className="App">
      <div className='fixed top-2 left-0 right-0 mx-6'>
        <NavBar></NavBar>
      </div>
      <div className='fixed top-24 left-0 right-0'>
        <Button>Tool-Tip</Button>
      </div>

      <div className='  mt-32 flex gap-4'>
        <div className='w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          {
            load.map(movie => <SingleMovie key={movie.id} movie={movie}
              handaleWatchTime={handaleWatchTime}
            ></SingleMovie>)
          }

        </div>
        <div className='w-[15%] fixed top-20 right-32'>
          <Cart
            watchTime={watchTime}

          ></Cart>
        </div>

      </div>




      <ToastContainer></ToastContainer>

    </div>

  )
}

export default App
