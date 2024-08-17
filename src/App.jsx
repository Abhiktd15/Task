import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import SignUpPage from './components/SignUp/SignUpPage.jsx'
import LoginPage from './components/Login/LoginPage.jsx'
import { StepperPage } from './components/Stepper/Stepper.jsx'
import EmailVerifyPage from './pages/EmailVerifyPage.jsx'
import PageNotFound from './pages/404Page.jsx'
import ForgotPassword from './pages/ForgotPasswordPage.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<SignUpPage/>
  },
  {
    path:'/login',
    element:<LoginPage/>
  },
  {
    path:"/forgot-password",
    element:<ForgotPassword/>
  },
  {
    path:'/home',
    element:<EmailVerifyPage/>
  },
  {
    path:"/profile",
    element:<StepperPage/>
  },
  {
    path:'*',
    element:<PageNotFound/>
  }
])

function App() {
  return (
    <div className='p-2'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
