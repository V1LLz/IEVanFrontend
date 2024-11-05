import React, { useState } from 'react';
import UserSideMenu from './Components/UserSideMenu';
import Institute from './Components/UserPages/NuestraInstitucion/Institute'
import Header from './Components/Header';
import { News, CreatePost} from './Components/UserPages/Pages';
import EventAdmin from './Components/AdminPages/EventAdmin';
import { PostAdmin } from './Components/AdminPages/PostAdmin';
import { Events } from './Components/UserPages/Events';
import Footer from './Components/Footer';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import GestionAcademica from './Components/UserPages/GestionAcademica/GestionAcademica';
import Biblioteca from './Components/UserPages/GestionAcademica/Biblioteca';
import Home from './Components/UserPages/Home';
import DocumentosInstitucionales from './Components/UserPages/GestionAcademica/DocumentosInstitucionales';
import PlataformasAcademicas from './Components/UserPages/GestionAcademica/PlataformasAcademicas';
import Sedes from './Components/UserPages/NuestraInstitucion/Sedes';

const Page = ({ isPanelOpen, togglePanel }) => {
  const location = useLocation(); 
  const showHeaderFooter = location.pathname !== '/ingresar'; // ocultar Header y Footer en Login

  return (
    <div className="flex flex-col min-h-screen">
      {showHeaderFooter && <Header onOpenUserSideMenu={togglePanel}/>}
      <main className='flex-grow min-h-dvh'>
        <UserSideMenu open={isPanelOpen} togglePanel={togglePanel} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<News />} />
          
          <Route path="/nuestra-institucion" element={<Institute />} />
          <Route path="/nuestra-institucion/sedes" element={<Sedes />} />


          <Route path="/comunidad-ierv/eventos" element={<Events />} />
          <Route path="/ingresar" element={<Login />} />
          <Route path='/crear-post' element={<CreatePost/>} />
          <Route path='/administrar-eventos' element={<EventAdmin/>} />
          <Route path='/administrar-posts' element={<PostAdmin/>} />

          <Route path='/gestion-academica' element={<GestionAcademica/>} />
          <Route path='/gestion-academica/biblioteca-virtual-ierv' element={<Biblioteca />} />
          <Route path='/gestion-academica/documentos-institucionales' element={<DocumentosInstitucionales />} />
          <Route path='/gestion-academica/plataformas-academicas' element={<PlataformasAcademicas />} />



        </Routes>
      </main>
      {showHeaderFooter && <Footer />}
    </div>
  );
};

const App = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const togglePanel = () => setIsPanelOpen(!isPanelOpen);

  return (
    <Router>
      <Page isPanelOpen={isPanelOpen} togglePanel={togglePanel} />
    </Router>
  );
};

export default App;


