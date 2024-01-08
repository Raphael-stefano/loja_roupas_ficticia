import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { ProvedorGeral } from './context/contexto';
import Home from './rotas/home';
import Teste from './rotas/teste';
import Contatos from './rotas/contatos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/teste',
        element: <Teste/>
      },
      {
        path: '/contatos',
        element: <Contatos/>
      }
    ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProvedorGeral>
      <RouterProvider router={router}/>
    </ProvedorGeral>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
