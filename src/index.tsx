import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import P5Wrapper from './components/P5Wrapper'
import sketch from './components/P5Wrapper/sketch'
import MD from './pages/MenubarApps'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/menubar-apps",
    element: <MD />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const P5: any = P5Wrapper()

root.render(
  <React.StrictMode>
    <P5 sketch={sketch} ></P5>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
