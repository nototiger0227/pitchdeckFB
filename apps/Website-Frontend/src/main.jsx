import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css'
import UserLogin from './pages/User/Login.jsx';
import { RecoilRoot } from 'recoil';
import UserProfile from "./pages/User/UserProfile.jsx"
import About from './pages/RibbonPage/About.jsx';
import ContactUs from './pages/RibbonPage/ContactUs.jsx';
import Home from './pages/RibbonPage/Home.jsx';
import UserSignUp from './pages/User/SignUp.jsx';
import Chatbot from './pages/RibbonPage/Chatbot.jsx';
import Community from './pages/User/CommunityPage.jsx';
import FAQ from './pages/User/faq.jsx';
import StudentStudentCommunity from './pages/User/s2s.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <UserLogin />
  },
  {
    path: '/user/:userId',
    element: <UserProfile />
  }, {
    path: "/about",
    element: <About />
  }, {
    path: "/contact",
    element: <ContactUs />
  }, {
    path: "/home",
    element: <App />
  },
  {
    path: "/signup",
    element: <UserSignUp />
  },
  {
    path: "/chat",
    element: <Chatbot />
  },
  {
    path: "/communitypage",
    element: <Community />
  }
  , 
  {
    path: "/faq",
    element: <FAQ />
  }
  ,
  {
    path: "/s2s",
    element: <StudentStudentCommunity />
  }
]);


createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
)
