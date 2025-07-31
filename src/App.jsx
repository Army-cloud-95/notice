import React,{ useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import About from './pages/About.jsx';
import Form from './components/Form.jsx';
import Team from './pages/Team.jsx';
import Project from './pages/Project.jsx';
import Volunteer from './pages/Volunteer.jsx';
import Notice from './pages/Notice.jsx';
import Landing from './pages/Landing.jsx';


    
function App () {
    return(
        <div className="pb-24 bg-gradient-to-br from-yellow-50 to-amber-50">
        <Navbar />

        <Routes>
            <Route path ='/' element={<Landing />} />
            <Route path='/about' element={<About />} />
            <Route path='/team' element={<Team />} />
            <Route path='/project' element={<Project />} />
            <Route path='/volunteer' element={<Volunteer />} />
            <Route path='/form' element={<Form />} />
            <Route path='/notice' element={<Notice />} />
        </Routes>
           

        <Footer />
        </div>
    )
}
export default App;