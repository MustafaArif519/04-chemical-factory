// import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import Navigation from './Navigation';
import ErrorPage from './ErrorPage';
import Home from './home/Home';


function App() {


  return (
    <>
      <Router >

          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>

        </Router>
    </>
  )
}

export default App
