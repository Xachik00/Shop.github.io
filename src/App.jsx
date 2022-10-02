import {Routes,Route} from 'react-router-dom'

import Header from './components/Header/';
import Footer from './components/Footer/';

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AdoutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CategoryPaje from './pages/CategoryPaje/CategoryPaje';
import DetaliPaje from './pages/DetaliPaje/DetaliPaje';

function App() {
  return (
    <>
    <Header />
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/About' element={<AboutPage/>} />
          <Route path='/Contact' element={<ContactPage/>} />
          <Route path='/category/:name' element={<CategoryPaje/>} />
          <Route path='/:name/:id' element={<DetaliPaje/>} />
          <Route path='/*' element={<NotFoundPage/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
