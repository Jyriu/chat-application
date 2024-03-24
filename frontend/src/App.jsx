import './App.css'
import SignUp from '/src/pages/signup/SignUp'
import Login from '/src/pages/login/Login'
import Home from '/src/pages/home/Home'

function App() {

  return (
    <div className='p-4 h-screen flex items-venter justify-center'>
      {/* <SignUp /> */}
      <Home />
    </div>
  )
}

export default App
