import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'regenerator-runtime/runtime';
import {createHashRouter,RouterProvider} from 'react-router-dom';
const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
