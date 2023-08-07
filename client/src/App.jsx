import './App.css';
import Home from './pages/Home'
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import ErrorPage from "./pages/ErrorPage"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);


function App() {
  return (
    <RouterProvider className="App" router={router} />
  );
}

export default App;
