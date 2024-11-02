import React, { useState } from 'react';
import UserSideMenu from './Components/UserSideMenu';
import Header from './Components/Header';
import { Home, News, Articles, Institute, Offices , CreatePost} from './Components/UserPages/Pages';
import EventAdmin from './Components/AdminPages/EventAdmin';
import { PostAdmin } from './Components/AdminPages/PostAdmin';
import { Events } from './Components/UserPages/Events';
import Footer from './Components/Footer';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const Page = ({ isPanelOpen, togglePanel }) => {
  const location = useLocation(); 
  const showHeaderFooter = location.pathname !== '/ingresar'; // ocultar Header y Footer en Login

  return (
    <div className="flex flex-col min-h-screen">
      {showHeaderFooter && <Header onOpenUserSideMenu={togglePanel}/>}
      <main className='flex-grow'>
        <UserSideMenu open={isPanelOpen} togglePanel={togglePanel} />
        <Routes>
          <Route path="/inicio" element={<Home />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/nuestra-institucion" element={<Institute />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/articulos" element={<Articles />} />
          <Route path="/sedes" element={<Offices />} />
          <Route path="/ingresar" element={<Login />} />
          <Route path='/crear-post' element={<CreatePost/>} />
          <Route path='/administrar-eventos' element={<EventAdmin/>} />
          <Route path='/administrar-posts' element={<PostAdmin/>} />

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


