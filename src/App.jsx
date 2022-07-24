import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import OrderHistory from './Pages/OrderHistory';
import ShoppingCart from './Pages/ShoppingCart';
import Summary from './Pages/Summary'
import Normalize from 'react-normalize';
import Navbar from './Components/Navbar/Navbar';
import jsCookie from 'js-cookie';
import { useTranslation } from "react-i18next";
import { useEffect } from 'react';
import { languages } from './Languages/Languages'
import Signin from './Auth/SignIn/Signin';
import Register from './Auth/Register/Register';
import { Provider } from 'react-redux'
import store from './Redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer/Footer';
import { RequireAuth } from './Auth/RequireAuth';


function App() {
  const currentLanguageCode = jsCookie.get('i18next') || 'en'
  const currentLanguage = languages.find(l => l.code === currentLanguageCode)
  const { t } = useTranslation()

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])
  
  return (
    <Provider store={store}>
      <div className="App">
        <Normalize />
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<RequireAuth><Menu /></RequireAuth>} />
          <Route path='/order-history' element={<RequireAuth><OrderHistory /></RequireAuth>} />
          <Route path='/shopping-cart' element={<RequireAuth><ShoppingCart /></RequireAuth>} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/register' element={<Register />} />
          <Route path='/summary/:total' element={<RequireAuth><Summary /></RequireAuth>} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
