import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import {createBrowserRouter, RouterProvider,   } from "react-router-dom";
import Bag from "./routes/Bag.jsx"
import Home from './routes/Home.jsx';
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {Provider} from 'react-redux';
import myntraStore from './store/index.js';

const router = createBrowserRouter([
  {path : "/", element: <App/>,
    children:[
    {path : "/" , element: <Home/>, /*loader: postLoader*/},
    {path : "/bag", element: <Bag/>, /*action : CreatePostAction*/},
]
},

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {myntraStore} >
     <RouterProvider router={router}/>  
    </Provider>
  </StrictMode>,
)



