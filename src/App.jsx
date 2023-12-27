// import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import Navigation from './Navigation';
import ErrorPage from './ErrorPage';
import Home from './home/Home';
import Footer from './footer/Footer';


function App() {


  return (
    <>
      <Router >

          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>

          <Footer />
        </Router>
    </>
  )
}

export default App
