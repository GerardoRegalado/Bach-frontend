// ./src/Router.js
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import PetsState from './context/Pets/PetsState';
import UsersState from './context/Users/UsersState';
import './App.css'

import Auth from './routes/Auth'
import Public from './routes/Public';
import Priv from './routes/Private';


import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Bach from './components/Home-Bach/Bach';
import Tdah from './components/Surveys/Tdah';







function Router() {
  return (
    <>
      <PetsState>
      <UsersState>

      <BrowserRouter>
          <Routes>
          
          <Route 
                  path="/"
                  element={
                    <Public component={Bach} />
                  } 
                />
            
            <Route path="home" element={<Layout />}>
                <Route 
                  index 
                  element={
                    <Public component={Home}
                  />} 
                />

                {/* localhost:3000/registro */}
                <Route 
                  path="registro"
                  element={
                    <Auth component={Register} />
                  } 
                />

                {/* localhost:3000/login */}
                <Route 
                  path="login"
                  element={
                    <Auth component={Login} />
                  } 
                />        

                
                {/* localhost:3000/tdah */}
                <Route 
                  path="tdah"
                  element={
                    <Public component={Tdah} />
                  } 
                />           

            </Route>

            


          </Routes>

      </BrowserRouter>

      </UsersState>
      </PetsState>

    </>
  );
}

export default Router;