// ./src/Router.js
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import PetsState from './context/Pets/PetsState';
import UsersState from './context/Users/UsersState';
import './App.css'
import TdahState from './context/Tdah/TdahState'

import Auth from './routes/Auth'
import Public from './routes/Public';
import Priv from './routes/Private';


import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Bach from './components/Home-Bach/Bach';
import Tdah from './components/Surveys/Tdah';
import Feed from './components/Surveys/Feed';










function Router() {

  return (
    <>
     
      
      <PetsState>
      <UsersState>
      <TdahState>

        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Layout />}>
            <Route index element={<Public component={Bach}/>} />
            <Route path="register" element={<Auth component={Register} />} />
            <Route path="login"element={<Auth component={Login} />} />        
            <Route path="tdah"element={<Public component={Tdah} />} />   
            <Route path="feed"element={<Public component={Feed} />} />
            </Route>

          </Routes>

        </BrowserRouter>

      </TdahState>
      </UsersState>
      </PetsState>
     
      

    </>
  );
}

export default Router;