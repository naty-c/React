import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Products from './pages/Products.jsx'

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendForm() {
    const form = {
      name,
      email,
      message
  }
  console.log('Form sent:', { name, email, message });
}

  return (
    <>
      <Header></Header>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}

      <Products></Products>

      <div className='form'>
        <div className='left-side'>
        <fieldset>
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
        </fieldset>
        <fieldset>
            <label>Email:</label>
            <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </fieldset>
        </div>
        <div className='right-side'>
        <fieldset>
            <label>Message:</label>
            <textarea type="text" autofocus rows="5" placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)}/>
        </fieldset>
        <button onClick={() => sendForm}>Send</button>
        </div>
    </div>

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <Footer></Footer>
    </>
  )
}

export default App
