import React, { ComponentElement } from 'react';
import './App.css';
import Loader from './Components/Loader/Loader';
import { Routes, Route } from "react-router-dom";
const Details: any = React.lazy(() => import('./Components/Details/Details'));
const Home: any = React.lazy(() => import('./Components/Home/Home'));
const Purchase: any = React.lazy(() => import('./Components/Purchase/Purchase'));
const Checkout: any = React.lazy(() => import('./Components/Checkout/Checkout'));

const App: React.FC = () => {
  type routeProps = {
    path: string;
    component:  ComponentElement<any, any>;
  };

  const routes: routeProps[] = [
    {
      path: '/',
      component: <Home/>,
    },
    {
      path: 'home',
      component: <Home/>,
    },
    {
      path: 'detail/:id',
      component: <Details/>,      
    },
    {
      path: 'purchase',
      component: <Purchase/>,      
    },
    {
      path: 'checkout',
      component: <Checkout/>,      
    }
  ];

  return (
    <>
        <div className="App">

          <React.Suspense fallback={<Loader />}>
            <Routes>

                { 
                  routes.map((route: routeProps) => (
                    <Route key={route.path} path={route.path} element={route.component}>
                    </Route>
                  ))
                }
            
            </Routes>
          </React.Suspense>

        </div>
    </>
  );
}

export default App;