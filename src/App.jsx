// import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import Navigation from './Navigation';
import ErrorPage from './ErrorPage';
import Home from './home/Home';
import Footer from './footer/Footer';
import Contact from './contact/Contact';
import About from './about/About';
import Product from './products/Products';
import Why from './why/Why';


function App() {


  return (
    <>
      <Router >

          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact/" element = {<Contact />} />
            <Route path="/about/" element = {<About/>} />
            <Route path="/products/" element = {<Product/>} />
            <Route path="/why/" element= {<Why/>} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>

          <Footer />
        </Router>
    </>
  )
}

export default App
