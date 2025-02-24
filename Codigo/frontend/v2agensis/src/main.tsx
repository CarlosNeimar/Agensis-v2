import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Landing from './pages/default/Landing.tsx';
import Login from './pages/default/login.tsx';
import Page404 from './pages/default/Page404.tsx';
import Sign_up from './pages/default/Sign_up.tsx';
import Market from './pages/default/Market.tsx';

// Rotas do frontend
const router = createBrowserRouter([
  //? Caminhos default (sem autenticação) 
  //*  - Clientes / Artistas acessam
  {
    path: '/',
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
       path: 'login',
        element: <Login /> 
      },
      {
        path: 'signup',
        element: <Sign_up />
      },
      {
        path: 'market',
        element: <Market />
      },
    ]
  },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
