import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About"
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import CreateBlog from './pages/CreateBlog';

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path='/blog' element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetails />} />
      <Route path="/createBlog" element={<CreateBlog />} />

    </Routes>
    <Footer />
    </>
  )
}

export default App
