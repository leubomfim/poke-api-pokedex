import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PokeProvider } from './contexts/context';
import { Home } from './Pages/Home';
import { PoKeDetails } from './Pages/PokeDetails';

export const PagesRoutes = () => {
  return (
    <Router>
      <PokeProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:id" element={<PoKeDetails />} />
        </Routes>
      </PokeProvider>
    </Router>
  );
};
