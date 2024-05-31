import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.min.css'

import { router } from './routers/MainRouter.ts';




ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <RouterProvider router={router} />
  
)
