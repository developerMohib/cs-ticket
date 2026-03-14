import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Task from './components/Task'

function App() {

  return (
    <>
      <Navbar />
      <main className='container px-4 mx-auto'>
        <Banner />
        <Task />
      </main>
      <Footer />
    </>
  )
}

export default App
